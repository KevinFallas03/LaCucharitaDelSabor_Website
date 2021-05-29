const mongoose = require("mongoose");

//cluster or local database for testing
const uriReposteria = process.env.DB_CONNECTION_REPOSTERIA || "mongodb://localhost/api_reposteria"; 
const uriAuth = process.env.DB_CONNECTION_AUTH || "mongodb://localhost/api_reposteria"; 


mongoose.db_Reposteria = mongoose.createConnection(
    uriReposteria, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false // for deprecation warning
    }
);
mongoose.db_Reposteria.on('connected', () => {
    console.log(`Connected to Reposteria DB with '${uriAuth}'`);
});

mongoose.db_Reposteria.on('disconnected', () => {
    console.log('connection disconnected');
});


mongoose.db_Authentication = mongoose.createConnection(
    uriAuth, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false // for deprecation warning
    }
);

mongoose.db_Authentication.on('connected', () => {
    console.log(`Connected to Authentication DB with '${uriAuth}'`);
});

mongoose.db_Authentication.on('disconnected', () => {
    console.log('connection disconnected');
});


module.exports = mongoose; 