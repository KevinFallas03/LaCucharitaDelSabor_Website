const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.set("port", process.env.PORT || 5000);

/* Middlewares */
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/* Routes */
//app.use("/api/example", require("./routes/example"));

// Example : later can be User, Product, ...
// Tested from Postman with GET `http://localhost:3000/api/example, ....
// Running 
//  - development : npm run dev // with nodemon!
//  - default :     npm start   // default script to start node server!
//
// Note: If doesn't connect to database, remember add your current IP address in Network access tab in Mongo Atlas - Cluster 0

module.exports = app; 