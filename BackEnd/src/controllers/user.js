const User = require("../models/User");
const userController = {};

userController.getAllUsers = async (req, res) => {
    try{
        const user = await User.find({});
        res.json(user);
    }catch (error){
        res.json({message: error})
    }
}

userController.getUser = async (req, res) => {
    try{
        const user = await User.find({_id: req.params.id});
        res.json(user);
    }catch (error){
        res.json({message: error})
    }
}

userController.createUser = async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        isAdmin: req.body.isAdmin,
        image: req.body.image
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);

    }catch (error){
        res.json({message: error})
    }
}

userController.updateUser = async (req,res) => {
    try{
        const updatedProduct = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(updatedProduct);
    } catch (error) {
        res.json({message: error});
    }
}

userController.deleteUser = async (req,res) => {
    try {
        const removedUser= await UserAuth.deleteOne({email: req.params.email});
        res.status(200).json(removedUser);
    } catch (error) {
        res.status(400).json({Error: "Something went wrong"});
    }
}

module.exports = userController;