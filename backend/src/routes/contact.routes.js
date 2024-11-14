const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const { verifyEmail } = require('../middlewares/verify.middleware');
const { authLimiter } = require('../middlewares/rateLimit.middlewre');

const authController = new AuthController();

// Auth routes
router.post('/register', authLimiter, authController.register.bind(authController));
router.post('/login', authLimiter, verifyEmail, authController.login.bind(authController));
router.get('/verify-email/:token', authController.verifyEmail.bind(authController));

module.exports = router;  

