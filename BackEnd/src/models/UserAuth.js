/* UserAuth schema, used to user security  */

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

 const { Schema } = mongoose;
 
var conn = require('../database')

 const UserAuthSchema = new Schema(
   {
     email: { 
         type: String, 
         required: true 
     },
     password: {
         type: String,
         required: true 
     },
     tokens: [{
      token: {
          type: String,
          required: true
      }
      }],
      isAdmin: {
          type: Boolean,
          require: true
      }
   },
   {
     versionKey: false, 
     timestamps: true, // createdAt and updatedAt 
   }
 );
 
/*Security Methods*/

// Encrypts the password before saving it in the database
UserAuthSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password') && user.password != "") {
      user.password = await bcrypt.hash(user.password, 8);
  }
  next()
})


// Generates an authentication token
UserAuthSchema.methods.generateToken = async function () {
  const user = this;
  const generatedToken = jwt.sign({_id: user._id}, process.env.TOKEN_KEY);

  user.tokens = user.tokens.concat({token: generatedToken});
  
  await user.save();
  return generatedToken;
}


// Finds a specific user based on email AND password
UserAuthSchema.statics.getFromCredentials = async (pEmail, password) => {

  console.log(email);
  const foundUser = await UserAuth.findOne({email: pEmail});


  if (!pEmail) {
      throw new Error({error: "Invalid credentials."});
  }
  const samePassword = await bcrypt.compare(password, foundUser.password);
  
  if (!samePassword) {
      throw new Error({error: "Invalid credentials."});
  }
  
  return foundUser
}


 let userAuth = conn.db_Authentication.model("UserAuth", UserAuthSchema, "User"); 

 module.exports = userAuth;