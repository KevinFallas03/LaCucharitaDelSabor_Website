const express = require("express");
const router = express.Router();
 
const customerController = require("../controllers/cutomer");

router.get("/", customerController.getCustomer);

router.get("/:mail",customerController.getCustomerByMail);

router.post("/", customerController.createCustomer);
 
router.put("/:mail", customerController.updateCustomer);
 
router.delete("/:mail", customerController.deleteCustomer);
 
module.exports = router; 