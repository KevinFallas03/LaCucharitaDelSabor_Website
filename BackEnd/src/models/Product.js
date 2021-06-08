/**
 * MODEL Product
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;

 const conn = require('../database');
 
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
    collection: 'Product' // createdAt and updatedAt 
   }
 );
 
 let product = conn.db_Reposteria.model("Product", productSchema, "Product");

 module.exports = product; 