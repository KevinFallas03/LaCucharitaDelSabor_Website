const userAuthSchema = require("../models/UsuarioAuth");
const userAuthController = {};

userAuthController.getUserAuth = async (req,res) => {
    res.json({
        message : "Get from userAuth"
    });
}

userAuthController.createUserAuth = async (req,res) => {
    res.json({
        message : "Create from userAuth"
    });
}

userAuthController.updateUserAuth = async (req,res) => {
    res.json({
        message : "Update from userAuth"
    });
}

userAuthController.deleteUserAuth = async (req,res) => {
    res.json({
        message : "Delete from userAuth"
    });
}

module.exports = userAuthController;