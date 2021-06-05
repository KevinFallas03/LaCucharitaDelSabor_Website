/**
 * MODEL EXAMPLE
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 
const conn = require('../database');

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
     image: {
       type: String,
       required: true
     }
   },
   {
    collection: 'User' // createdAt and updatedAt 
   }
 );
 
 let user = conn.db_Reposteria.model("User", userSchema, "User");

 module.exports = user;