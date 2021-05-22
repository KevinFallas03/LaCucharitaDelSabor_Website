/**
 * MODEL EXAMPLE
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;
 
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
     versionKey: false, 
     timestamps: true, // createdAt and updatedAt 
   }
 );
 
 module.exports = mongoose.model("Delivery", deliverySchema); 