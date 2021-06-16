const express = require("express");
const router = express.Router();
 
const orderController = require("../controllers/order");

router.get("/", orderController.getAllOrders);
router.get("/getSingle/:id", orderController.getSingleOrder);
router.get("/completed", orderController.getAllCompleteOrders);
router.get("/pending", orderController.getAllPendingOrders);

router.post("/", orderController.createOrder);
 
router.put("/:id", orderController.updateOrder);
router.put("/finishOrder/:id", orderController.finishOrder);


router.delete("/:id", orderController.deleteOrder);

module.exports = router; 