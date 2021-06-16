const Order = require("../models/Order");
const dashboardController = {};

dashboardController.getHigherSell = async (req, res) => {
    try{
        console.log("entro");
        const highierSell = await Order.find({},{"totalAmount":1})
        .sort({totalAmount: -1})
        .limit(1)
        //console.log(highierSell);
        res.json({value: highierSell});
    } catch (error) {
        res.json({message: error});
    }
}

dashboardController.getPendingAmount = async (req, res) => {
    try{
        const ordersAmount = await Order.countDocuments({'finished': false});
        res.json({value: ordersAmount});
    }catch (error){
        res.json({message: error})
    }
}

dashboardController.getCompletedAmount = async (req, res) => {
    try{
        const ordersAmount = await Order.countDocuments({'finished': true});
        res.json({value: ordersAmount});
    }catch (error){
        res.json({message: error})
    }
}

dashboardController.getOrdersAmount = async (req, res) => {
    try{
        const ordersAmount = await Order.countDocuments({});
        res.json({amount: ordersAmount});
    }catch (error){
        res.json({message: error})
    }
}

dashboardController.getTop5Costumers = async (req, res) => {
    try{
        const costumersFiltered = await Order.aggregate([
            {"$sortByCount" : "$customerInfo.email"},
            {"$limit" : 5}
        ]) ;
        res.json(costumersFiltered);
    }catch (error){
        res.json({message: error})
    }
}

dashboardController.getTop5Products = async (req, res) => {
    try{
        const costumersFiltered = await Order.aggregate([
            {"$unwind" : "$orderInfo"},
            {"$sortByCount" : "$orderInfo.name"},
            {"$limit" : 5}
        ]) ;
        res.json(costumersFiltered);
    }catch (error){
        res.json({message: error})
    }
}

dashboardController.getUserName = async (req, res) => {
    try{
        const customerName = await Order.find(
            {'customerInfo.email': req.params.email},
            {'customerInfo.contactInfo.name':1
        })
        .limit(1);
        res.json(customerName);
    }catch (error){
        res.json({message: error})
    }
}


module.exports = dashboardController;
