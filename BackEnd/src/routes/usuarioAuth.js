const express = require("express");
const router = express.Router();
 
const userAuthController = require("../controllers/usuarioAuth");

router.get("/", userAuthController.getUserAuth);

router.post("/", userAuthController.createUserAuth);
 
 router.put("/:id", userAuthController.updateUserAuth);
 
 router.delete("/:id", userAuthController.deleteUserAuth);
 
 module.exports = router; 