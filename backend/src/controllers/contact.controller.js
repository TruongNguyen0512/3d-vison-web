const Contact = require('../models/contact.model');

class ContactController {
  async createContact(req, res) {
    try {
      const { organization, lastName, firstName, email, website, inquiry } = req.body;
      
      const newContact = await Contact.create({
        organization,
        lastName,
        firstName,
        email,
        website,
        inquiry
      });

      return res.status(201).json({
        success: true,
        data: newContact
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getContacts(req, res) {
    try {
      const contacts = await Contact.find({}).sort({ createdAt: -1 });
      
      return res.status(200).json({
        success: true,
        data: contacts
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new ContactController();