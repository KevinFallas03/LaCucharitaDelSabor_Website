const express = require("express");
const router = express.Router();
 
const deliveryController = require("../controllers/delivery");

router.get("/", deliveryController.getAllDeliveries);

router.get("/:id", deliveryController.getDelivery);

router.post("/", deliveryController.createDelivery);

router.put("/:id", deliveryController.updateDelivery);

router.delete("/:id", deliveryController.deleteDelivery);

module.exports = router; 