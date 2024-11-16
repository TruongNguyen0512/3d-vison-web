const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const app = express();
// Add this line to trust proxy
app.set('trust proxy', 1);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());  
app.use(compression())
app.use(cors({
  origin: [
    'http://localhost:3157',  // Local frontend
    'https://threedvison.onrender.com' // Production frontend
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


//routes

// Add this line after your existing middleware
const contactRouter = require('./routes/contact.routes');
const { apiLimiter } = require("./middlewares/rateLimit.middlewre");
app.use(apiLimiter);
// Add this line before error handling middleware
app.use('/api/v1', contactRouter);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

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
