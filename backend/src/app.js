const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());  
app.use(compression())
app.use(cors());


//routes

// Add this line after your existing middleware
const contactRouter = require('./routes/contact.routes');
const { apiLimiter } = require("./middlewares/rateLimit.middlewre");
app.use(apiLimiter);
// Add this line before error handling middleware
app.use('/api/v1', contactRouter);

//init db
require("./dbs/init.mongodb");


// error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === 'dev' ? err.stack : undefined
    });
  });



module.exports = app;
