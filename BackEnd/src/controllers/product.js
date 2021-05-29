const productSchema = require("../models/Product");
const productController = {};

productController.getProduct = async (req,res) => {
    res.json({
        message : "Get from product"
    });
}

productController.createProduct = async (req,res) => {
    res.json({
        message : "Create from product"
    });
}

productController.updateProduct = async (req,res) => {
    res.json({
        message : "Update from product"
    });
}

productController.deleteProduct = async (req,res) => {
    res.json({
        message : "Delete from product"
    });
}

module.exports = productController;