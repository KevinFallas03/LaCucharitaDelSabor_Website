/**
 * MODEL EXAMPLE
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 
 const userAuthSchema = new Schema(
   {
     username: { 
         type: String, 
         required: true 
     },
     password: {
         type: String,
         required: true 
     }
   },
   {
     versionKey: false, 
     timestamps: true, // createdAt and updatedAt 
   }
 );
 
 module.exports = mongoose.model("UserAuth", userAuthSchema); 