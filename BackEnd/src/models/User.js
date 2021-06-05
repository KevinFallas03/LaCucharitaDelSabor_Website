/**
 * MODEL EXAMPLE
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 
 const userSchema = new Schema(
   {
     name: { 
         type: String, 
         required: true 
     },
     email: {
         type: String,
         required: true 
     },
     jobTitle: {
         type: String, 
         required: true 
     },
     isAdmin: {
         type: Boolean, 
         required: true 
     },
   },
   {
    collection: 'User' // createdAt and updatedAt 
   }
 );
 
 module.exports = mongoose.model("User", userSchema); 