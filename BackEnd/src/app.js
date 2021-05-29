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
app.use("/api/customer", require("./routes/customer"));
app.use("/api/delivery",require("./routes/delivery"));
app.use("/api/order",require("./routes/order"));
app.use("/api/product",require("./routes/product"));
app.use("/api/user",require("./routes/user"));
app.use("/api/userAuth",require("./routes/userAuth"));

// Example : later can be User, Product, ...
// Tested from Postman with GET `http://localhost:3000/api/example, ....
// Running 
//  - development : npm run dev // with nodemon!
//  - default :     npm start   // default script to start node server!
//
// Note: If doesn't connect to database, remember add your current IP address in Network access tab in Mongo Atlas - Cluster 0

module.exports = app; 