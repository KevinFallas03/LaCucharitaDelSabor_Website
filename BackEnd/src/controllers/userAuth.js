const UserAuth = require("../models/UserAuth");
const bcrypt = require("bcrypt");

const userAuthController = {};

// Obtains all the users
userAuthController.getUsers = async (req, res) => {
    try{
        const customer = await UserAuth.find();
        res.json(customer);
    }catch (error){
        res.json({message: error})
    }

}

// Given a user token, return the user id that have this token in the token list
userAuthController.getUserAuthByToken = async (req,res) => {
    const { token } = req.params;
    try {
        const user = await UserAuth.find(
            { 'tokens.token':token },
            { _id:1, email:1, isAdmin:1, tokens:1 }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(401).send(error);
    }
}

// Gets a single user based on their email.
userAuthController.findUser = async (req, res) => {
    try {
        const user = await UserAuth.getFromCredentials(req.body.email, req.body.password);

        // No user was found
        if (!user) {
            return res.status(401).json({error: "Invalid credentials"});
        }

        const token = await UserAuth.generateToken();
        // 200: OK
        res.status(200).json({user, token});
    } catch (error) {
        // 400: Bad Request
        res.status(400).send(error);
    }
}

userAuthController.createUserAuth = async (req,res) => {
    // Creates the new user

    if (await UserAuth.findOne( {email: req.body.email} )) {
        return res
          .status(400)
          .json({ errors: [{ param: 'email', msg: 'Email already exists' }] });
    }

    var newUser = new UserAuth({
        email: req.body.email, // Unique email handled in model
        password: req.body.password,
        isAdmin: req.body.isAdmin
    });

    // Tries to save the user
    try {
        await newUser.save();

        // 201: user was created and saved successfully
        res.status(201).send({newUser});

    } catch (error) {
        // 400: Bad Request
        //res.status(400).send(error);
        res.json({message: error})
    }
}

userAuthController.updateUserAuth = async (req,res) => {
    try {

        var updatedUser = {};

        if (req.body.password == "") {
            console.log(req.params);
            updatedUser = await UserAuth.findOneAndUpdate({email : req.params.email}, {$set: {
                email: req.body.email,
            }},
            {new: true});
        } else {
            // Encrypts the password before updating it
            updatedUser = await UserAuth.findOneAndUpdate({email : req.params.email}, {$set: {
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 8),
            }},
            {new: true});
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({Error: "Something went wrong"});
    }
}

userAuthController.deleteUserAuth = async (req,res) => {
    try {
        const removedUser= await UserAuth.deleteOne({email: req.params.email});
        res.status(200).json(removedUser);
    } catch (error) {
        res.status(400).json({Error: "Something went wrong"});
    }
}

// Gets the information of one specific user
userAuthController.getUserInfo = async (req, res) => {
    try {
        const user = await UserAuth.findOne({email: req.params.email}, {tokens: false});

        // 200: OK
        res.status(200).json(user);
    } catch (error) {
        // 400: Bad Request
        res.status(400).send(error);
    }
}

userAuthController.isAdmin = async (req, res) => {
    try {
        res.status(200).json({isAdmin: req.email.isAdmin});
    } catch (error) {
        res.status(400).json({Error: "Something went wrong"});
    }
}

// Obtains a single user by its credentials 
userAuthController.login = async (req, res) => {
    try {
        const userFound = await UserAuth.findOne( {email: req.body.email} );
        console.log(req.body.password);
        if(!userFound) return res.status(400).json({message: "Invalid Credentials"})

        const matchPassword = await UserAuth.comparePassword(req.body.password, userFound.password);

        if(!matchPassword) return res.status(400).json({message: "Invalid Credentials"})

        const token = await userFound.generateToken();

        // 200: OK
        res.status(200).json({userFound, token});
    } catch (error) {
        // 401: Unathorized
        console.log("se cae");
        res.status(401).send({error: "Something went wrong"});
    }
}

module.exports = userAuthController;