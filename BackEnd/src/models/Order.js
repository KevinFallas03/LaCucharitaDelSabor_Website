/**
 * MODEL Order
 */

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

    }
)

 const customerInfoSchema = new Schema(
     {
        email: { 
            type: String, 
            required: true 
        },
        contactInfo : {
            type: [contactInfoSchema],
            required: true
        }
     }
 )

 const orderInfoSchema = new Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        price: {
            type: Number,
            required: true
        },
        productNote: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
)

const deliveryInfoSchema = new Schema(
    {
        location: { 
            type: String, 
            required: true 
        },
        price: {
            type: Number,
            required: true
        },
        deliveryNote: {
            type: String,
            required: true
        }
    }
)
 
 const orderSchema = new Schema(
   {
     customerInfo: { 
         type: customerInfoSchema, 
         required: true 
     },
     orderInfo: {
         type: [orderInfoSchema],
         required: true 
     },
     deliveryInfo: {
         type: deliveryInfoSchema, 
         required: true 
     },
     orderNote: {
         type: String, 
         required: true 
     },
     finished: {
        type: Boolean,
        required: true
     },
     date: {
        type: Date,
        required: true
     }
   },
   {
    collection: 'Order' // createdAt and updatedAt 
   }
 );
 
 module.exports = mongoose.model("Order", orderSchema); 