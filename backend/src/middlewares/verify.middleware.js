const contactModel = require("../models/contact.model");

const verifyEmail = async (req, res, next) => {
    try {
      const contact = await contactModel.findOne({ email: req.body.email });
      
      if (contact && !contact.isVerified) {
        return res.status(401).json({
          success: false,
          message: 'Please verify your email before logging in'
        });
      }
      
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
  
  module.exports = { verifyEmail };