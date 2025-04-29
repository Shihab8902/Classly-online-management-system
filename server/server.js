require("dotenv").config();
const express = require("express");
const app = express();
const applyInstalledMiddlewares = require("./middlewares/installed/index");
const connectDB = require("./db/connectDB");


//Middlewares
applyInstalledMiddlewares(app);




//Home route
express.Router().get("/", (req, res) => {
    res.send({ status: "ok", message: "The server is keep and running..." });
});



//Listen to the server
const run = async () => {
    await connectDB();
    app.listen(9000, () => {
        console.log("The server is keep and running....");
    })
};

run();