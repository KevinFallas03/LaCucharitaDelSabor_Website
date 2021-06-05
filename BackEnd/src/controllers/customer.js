const Customer = require("../models/Customer");

const customerController = {};

//GET ALL
customerController.getCustomer = async (req,res) => {
    try{
        
        const customer = await Customer.find();
        res.json(customer);
    }catch (error){
        res.json({message: error})
    }
}

//GET WITH PARAMETERS
customerController.getCustomerByMail = async (req,res) => {
    try{
        const customer = await Customer.findOne({email: req.params.email});
        res.json(customer);
    }catch (error){
        res.json({message: error})
    }
}

//POST
customerController.createCustomer = async (req,res) => {
    const customer = new Customer({
        email : req.body.email,
        customerInfo : req.body.customerInfo,
        orders : req.body.orders
    });
    try{
        const savedCostumer = await customer.save();
        res.json(savedCostumer);

    }catch (error){
        res.json({message: error})
    }
}

//UPDATE
customerController.updateCustomer = async (req,res) => {
    try {
        const updatedCostumer = await Customer.findOneAndUpdate({email : req.params.email},{$set : {email : req.body.email , customerInfo : req.body.customerInfo, orders : req.body.orders}});
        res.json(updatedCostumer);
    } catch (error) {
        res.json({message : error});
    }
}

//DELETE
customerController.deleteCustomer = async (req,res) => {
    try {
        const removedCustomer = await Customer.findOneAndDelete({email: req.params.email});
        res.json(removedCustomer);
    } catch (error) {
        res.json({message : error});
    }
}

module.exports = customerController;