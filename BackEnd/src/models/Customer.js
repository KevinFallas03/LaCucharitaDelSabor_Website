const mongoose = require("mongoose");
const { Schema } = mongoose;

const conn = require('../database');

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
    email: { 
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

let customer = conn.db_Reposteria.model("Customer", customerSchema, "Customer");

module.exports = customer; 