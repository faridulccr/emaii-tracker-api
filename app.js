// create an express server
const express = require("express");
const cors = require("cors");
require("./db");

const bodyParser = require("body-parser");
// routes
const sentEmailRouter = require("./routers/recipient.route");
const homeRouter = require("./routers/home.route");

// create express server
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("views")); // for static file

app.use("/", homeRouter);
app.use("/recipient", sentEmailRouter);
app.use("/recipient", sentEmailRouter);
app.use("/recipient", sentEmailRouter);

// route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: "it is open for email tracking",
    });
});

// server error handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("something broke");
});

module.exports = app;
