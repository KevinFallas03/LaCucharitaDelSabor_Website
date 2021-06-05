const express = require("express");
const router = express.Router();
 
const customerController = require("../controllers/customer");

router.get("/", customerController.getCustomer);

router.get("/:email",customerController.getCustomerByMail);

router.post("/", customerController.createCustomer);
 
router.put("/:email", customerController.updateCustomer);
 
router.delete("/:email", customerController.deleteCustomer);
 
module.exports = router; 