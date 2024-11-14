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

// Add this line after your existing middleware
const contactRouter = require('./routes/contact.routes');
s
// Add this line before error handling middleware
app.use('/api/v1', contactRouter);

//init db
require("./dbs/init.mongodb");


// error handling middleware




module.exports = app;
