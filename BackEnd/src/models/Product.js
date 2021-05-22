/**
 * MODEL Product
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 
 const productSchema = new Schema(
   {
     name: { 
         type: String, 
         required: true 
     },
     price: {
         type: Number,
         required: true 
     },
     portions: {
         type: Number, 
         required: true 
     },
     image: {
         type: String, 
         required: true 
     },
   },
   {
     versionKey: false, 
     timestamps: true, // createdAt and updatedAt 
   }
 );
 
 module.exports = mongoose.model("Product", productSchema); 