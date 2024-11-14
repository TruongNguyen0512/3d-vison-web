const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Create new contact
router.post('/contacts', contactController.createContact);

// Get all contacts
router.get('/contacts', contactController.getContacts);

module.exports = router;