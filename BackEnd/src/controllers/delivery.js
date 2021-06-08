const Delivery = require("../models/Delivery");

const deliveryController = {};

// get all products
deliveryController.getAllDeliveries = async (req,res) => {
    try{
        const delivery = await Delivery.find({});
        res.json(delivery);
    }catch (error){
        res.json({message: error})
    }
}

// get delivery by id
deliveryController.getDelivery = async (req,res) => {
    try{
        const delivery = await Delivery.find({_id: req.params.id});
        res.json(delivery);
    }catch (error){
        res.json({message: error})
    }
}


deliveryController.createDelivery = async (req,res) => {
    const delivery = new Delivery({
        location : req.body.location,
        price : req.body.price,
        orders : req.body.orders
    });
    try{
        const savedDelivery = await delivery.save();
        res.json(savedDelivery);
    }catch (error){
        res.json({message: error})
    }
}

deliveryController.updateDelivery = async (req,res) => {
    try{
        const updatedDelivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedDelivery);
    } catch(error){
        res.json({message: error});
    }
}

deliveryController.deleteDelivery = async (req,res) => {
    try{
        const delivery = await Delivery.deleteOne({_id: req.params.id});
        res.status(201).json(delivery);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

module.exports = deliveryController;