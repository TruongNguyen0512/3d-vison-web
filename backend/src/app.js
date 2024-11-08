const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());  
app.use(compression())

//routes

//init db
require("./dbs/init.mongodb");


// error handling middleware




module.exports = app;
