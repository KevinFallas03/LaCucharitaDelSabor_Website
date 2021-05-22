/**
 * ROUTER EXAMPLE
 */

 const express = require("express");
 const router = express.Router();
 
 const exampleController = require("../controllers/example");
 
 router.get("/", exampleController.getExample);
 
 router.post("/", exampleController.createExample);
 
 router.put("/:id", exampleController.editExample);
 
 router.delete("/:id", exampleController.deleteExample);
 
 module.exports = router; 