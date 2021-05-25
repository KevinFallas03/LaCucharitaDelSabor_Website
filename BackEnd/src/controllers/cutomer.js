const customerSchema = require("../models/Customer");
const customerController = {};

customerController.getCustomer = async (req,res) => {
    res.json({
        message : "Get from customer"
    });
}

customerController.createCustomer = async (req,res) => {
    res.json({
        message : "Create from customer"
    });
}

customerController.updateCustomer = async (req,res) => {
    res.json({
        message : "Update from customer"
    });
}

customerController.deleteCustomer = async (req,res) => {
    res.json({
        message : "Delete from customer"
    });
}

module.exports = customerController;