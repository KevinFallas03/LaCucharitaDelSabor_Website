const express = require("express");
const router = express.Router();
 
const productController = require("../controllers/product");

router.get("/", productController.getAllProducts);

router.get("/getProduct/:id", productController.getProduct);

router.post("/imageByName", productController.getProductImageByName); // GET THE PRODUCT NAME SEND IN THE BODY

router.post("/", productController.createProduct);
 
 router.put("/:id", productController.updateProduct);
 
 router.delete("/:id", productController.deleteProduct);
 
 module.exports = router;