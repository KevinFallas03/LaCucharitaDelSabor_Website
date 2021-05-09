/**
 * CONTROLLER EXAMPLE
 */

 const example = require("../models/example");

 const exampleController = {};
 
 exampleController.getExample = async (req, res) => {
     res.json({
         message: "Hello from get!"
     });
 };
 
 exampleController.createExample = async (req, res) => {
     res.json({
         message: "Hello from create!"
     });
 };
 
 exampleController.editExample = async (req, res) => {
     res.json({
         message: "Hello from edit!"
     });
 };
 
 exampleController.deleteExample = async (req, res) => {
     res.json({
         message: "Hello from delete!"
     });
 };
 
 module.exports = exampleController; 