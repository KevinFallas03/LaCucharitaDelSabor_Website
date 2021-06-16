/**
 * MODEL Order
 */

 const mongoose = require("mongoose");
 const { Schema } = mongoose;

 const conn = require('../database');

 const contactInfoSchema = new Schema(
    {
       name: { 
           type: String, 
           required: false 
       },
       phone: {
           type: String,
           required: false
       }

    }
)

 const customerInfoSchema = new Schema(
     {
        email: { 
            type: String, 
            required: false 
        },
        contactInfo : {
            type: contactInfoSchema,
            required: false
        }
     }
 )

 const orderInfoSchema = new Schema(
    {
        name: { 
            type: String, 
            required: false 
        },
        price: {
            type: Number,
            required: false
        },
        productNote: {
            type: String,
            required: false
        },
        quant: {
            type: Number,
            required: false
        }
    }
)

const deliveryInfoSchema = new Schema(
    {
        location: { 
            type: String, 
            required: false 
        },
        price: {
            type: Number,
            required: false
        },
        deliveryNote: {
            type: String,
            required: false
        }
    }
)
 
 const orderSchema = new Schema(
   {
       customerInfo: { 
         type: customerInfoSchema, 
         required: false 
        },
        orderInfo: {
            type: [orderInfoSchema],
            required: false 
        },
        deliveryInfo: {
            type: deliveryInfoSchema, 
            required: false 
        },
        orderNote: {
            type: String, 
            required: false 
        },
        totalAmount: {
            type: Number,
            required: false
        },
        finished: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    {
        versionKey: false, 
        timestamps: true, // createdAt and updatedAt 
    },
    {
        collection: 'Order'
    }
 );
 
 
 let order = conn.db_Reposteria.model("Order", orderSchema, "Order");

 module.exports = order; 