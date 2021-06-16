const express = require("express");
const router = express.Router();
 
const dashboardController = require("../controllers/dashboard");

router.get("/higherSell", dashboardController.getHigherSell);
router.get("/pendingAmount", dashboardController.getPendingAmount);
router.get("/completedAmount", dashboardController.getCompletedAmount);
router.get("/ordersAmount", dashboardController.getOrdersAmount);
router.get("/topCostumers", dashboardController.getTop5Costumers);
router.get("/topProducts", dashboardController.getTop5Products);
router.get("/getUser/:email", dashboardController.getUserName);

module.exports = router; 