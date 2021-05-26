

 const mongoose = require("mongoose");
 const { Schema } = mongoose;

 const contactInfoSchema = new Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    phone: {
        type: String,
        required: true 
    }
  },
);
 
 const customerSchema = new Schema(
   {
     mail: { 
         type: String, 
         required: true 
     },
     orders: {
         type: Number,
         required: true 
     },
     customerInfo: {
         type:[contactInfoSchema],
         required: false
     }
    
   },
   {
     collection: 'Customer' // createdAt and updatedAt 
   }
 );
 
 module.exports = mongoose.model("Customer", customerSchema); 