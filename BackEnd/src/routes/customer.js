const express = require("express");
const router = express.Router();
 
const cutomerController = require("../controllers/cutomer");

router.get("/", cutomerController.getCustomer);

router.post("/", cutomerController.createCustomer);
 
 router.put("/:id", cutomerController.updateCustomer);
 
 router.delete("/:id", cutomerController.deleteCustomer);
 
 module.exports = router; 