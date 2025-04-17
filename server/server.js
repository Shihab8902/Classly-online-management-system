require("dotenv").config();
const express = require("express");
const app = express();
const applyInstalledMiddlewares = require("./middlewares/installed/index");


//Middlewares
applyInstalledMiddlewares(app);

