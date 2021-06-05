/**
 * MODEL EXAMPLE
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 
 const conn = require('../database');

 const deliverySchema = new Schema(
   {
     location: { 
         type: String, 
         required: true 
     },
     price: {
         type: Number,
         required: true 
     }
   },
   {
     collection: 'Delivery' // createdAt and updatedAt 
   }
 );
 
 let delivery = conn.db_Reposteria.model("Delivery", deliverySchema, "Delivery");

 module.exports = delivery; 