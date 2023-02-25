// Dependencies
const mongoose = require("mongoose");
const dbURL = process.env.DB_URL;

// connect application to mongoDB service
mongoose
    .connect(dbURL)
    .then(() => {
        console.log("mongodb atlas is connected");
    })
    .catch((err) => {
        // console.log(err);
        console.log("mongoDB is not connected");
        process.exit(1); // to stop server when occurs an error
    });
