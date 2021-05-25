const orderSchema = require("../models/Order");
const orderController = {};

orderController.getOrder = async (req,res) => {
    res.json({
        message : "Get from order"
    });
}

orderController.createOrder = async (req,res) => {
    res.json({
        message : "Create from order"
    });
}

orderController.updateOrder = async (req,res) => {
    res.json({
        message : "Update from order"
    });
}

orderController.deleteOrder = async (req,res) => {
    res.json({
        message : "Delete from order"
    });
}

module.exports = orderController;