const userSchema = require("../models/Usuario");
const userController = {};

userController.getUser = async (req,res) => {
    res.json({
        message : "Get from user"
    });
}

userController.createUser = async (req,res) => {
    res.json({
        message : "Create from user"
    });
}

userController.updateUser = async (req,res) => {
    res.json({
        message : "Update from user"
    });
}

userController.deleteUser = async (req,res) => {
    res.json({
        message : "Delete from user"
    });
}

module.exports = userController;