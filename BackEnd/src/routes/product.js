const express = require("express");
const router = express.Router();
 
const productController = require("../controllers/product");

router.get("/", productController.getAllProducts);

router.get("/getProduct/:id", productController.getProduct);

router.get("/imageByName", productController.getProductImageByName);

router.post("/", productController.createProduct);
 
 router.put("/:id", productController.updateProduct);
 
 router.delete("/:id", productController.deleteProduct);
 
 module.exports = router;