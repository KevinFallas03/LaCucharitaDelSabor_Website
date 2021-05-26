const Delivery = require("../models/Delivery");
const deliverySchema = require("../models/Delivery");
const deliveryController = {};

deliveryController.getDelivery = async (req,res) => {
    try{
        const delivery = await Delivery.find({});
        res.json(delivery);
    }catch (error){
        res.json({message: error})
    }
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