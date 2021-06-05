const Product = require("../models/Product");
const productController = {};

// GET ALL PRODUCTS 
productController.getAllProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        res.json(products);
    }catch (error){
        res.json({message: error})
    }
}

productController.createProduct = async (req,res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        portions: req.body.prortions,
        image: req.body.image
    });
    try{
        const savedProduct = await product.save();
        res.json(savedProduct);

    }catch (error){
        res.json({message: error})
    }
}

productController.updateProduct = async (req,res) => {
    try{
        const updatedProduct = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(updatedProduct);
    } catch (error) {
        res.json({message: error});
    }
}

productController.deleteProduct = async (req,res) => {
    try {
        const removedProduct = await Product.findOneAndDelete({_id: req.params.id});
        res.json(removedProduct);
    } catch (error) {
        res.json({message : error});
    }
}

module.exports = productController;