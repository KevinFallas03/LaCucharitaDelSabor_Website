const Customer = require("../models/Customer");
const customerSchema = require("../models/Customer");
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
        const customer = await Customer.findOne({mail: req.params.mail});
        res.json(customer);
    }catch (error){
        res.json({message: error})
    }
}

//POST
customerController.createCustomer = async (req,res) => {
    const customer = new customerSchema({
        mail : req.body.mail,
        customerInfo : req.body.customerInfo,
        orders : req.body.orders
    })
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
        const updatedCostumer = await Customer.findOneAndUpdate({mail : req.params.mail},{$set : {mail : req.body.mail , customerInfo : req.body.customerInfo, orders : req.body.orders}});
        res.json(updatedCostumer);
    } catch (error) {
        res.json({message : error});
    }
}

//DELETE
customerController.deleteCustomer = async (req,res) => {
    try {
        const removedCustomer = await Customer.findOneAndDelete({mail: req.params.mail});
        res.json(removedCustomer);
    } catch (error) {
        res.json({message : error});
    }
}

module.exports = customerController;