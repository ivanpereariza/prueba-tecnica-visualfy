const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI;

mongoose
    .connect(MONGO_URI)
    .then((db) => {
        const dbName = db.connections[0].name;
        console.log(`Connected to Mongo! Database name: "${dbName}"`);
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });
