const Order = require("../models/Order");
const orderController = {};

orderController.getAllCompleteOrders = async (req,res) => {
    try{
        const orders = await Order.find({'finished': true});
        res.json(orders);
    }catch (error){
        res.json({message: error})
    }
}

orderController.getAllPendingOrders = async (req,res) => {
    try{
        const orders = await Order.find({'finished': false});
        res.json(orders);
    }catch (error){
        res.json({message: error})
    }
}

orderController.getAllOrders = async (req,res) => {
    try{
        const orders = await Order.find({});
        res.json(orders);
    }catch (error){
        res.json({message: error})
    }
}

orderController.getSingleOrder = async (req,res) => {
    try{
        const updatedOrder = await Order.find({_id: req.params.id})
        res.json(updatedOrder);
    } catch (error) {
        res.json({message: error});
    }
}

orderController.createOrder = async (req,res) => {
    const order = new Order({
        customerInfo: req.body.customerInfo,
        orderInfo: req.body.orderInfo,
        deliveryInfo: req.body.deliveryInfo,
        orderNote: req.body.orderNote,
        totalAmount: req.body.totalAmount,
        finished: req.body.finished,
    });
    try{
        const savedOrder = await order.save();
        res.json(savedOrder);
    }catch (error){
        res.json({message: error})
    }
}

orderController.updateOrder = async (req,res) => {
    try{
        const updatedOrder = await Order.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(updatedOrder);
    } catch (error) {
        res.json({message: error});
    }
}

orderController.finishOrder = async (req,res) => {
    try{
        const orders = await Order.findOneAndUpdate({_id: req.params.id}, {finished: true}, {new: true});
        res.json(orders);
    }catch (error){
        res.json({message: error})
    }
}


orderController.deleteOrder = async (req,res) => {
    try {
        const removedOrder = await Order.findOneAndDelete({_id: req.params.id});
        res.json(removedOrder);
    } catch (error) {
        res.json({message : error});
    }
}

module.exports = orderController;