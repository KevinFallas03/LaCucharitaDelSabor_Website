const mongoose = require("mongoose");

//cluster or local database for testing
const URI = process.env.DB_CONNECTION || "mongodb://localhost/api_reposteria"; 

mongoose.connect(
    URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    (db) => {
        console.log(`Connected to DB with '${URI}'`);
    }
).catch(
    (err) => {
        console.error(err);
    }
);

module.exports = mongoose; 