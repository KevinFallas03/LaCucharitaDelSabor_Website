const deliverySchema = require("../models/Delivery");
const deliveryController = {};

deliveryController.getDelivery = async (req,res) => {
    res.json({
        message : "Get from delivery"
    });
}

deliveryController.createDelivery = async (req,res) => {
    res.json({
        message : "Create from delivery"
    });
}

deliveryController.updateDelivery = async (req,res) => {
    res.json({
        message : "Update from delivery"
    });
}

deliveryController.deleteDelivery = async (req,res) => {
    res.json({
        message : "Delete from delivery"
    });
}

module.exports = deliveryController;