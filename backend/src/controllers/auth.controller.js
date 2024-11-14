const Contact = require('../models/contact.model');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const emailService = require('../services/email.service');

class AuthController {
  signToken(contactId) {
    return jwt.sign({ id: contactId }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
  }

  async register(req, res) {
    try {
      const { organization, lastName, firstName, email, password, website } = req.body;

      const existingContact = await Contact.findOne({ email });
      if (existingContact) {
        return res.status(400).json({
          success: false,
          message: 'Email already registered'
        });
      }

      const verificationToken = crypto.randomBytes(32).toString('hex');
      const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

      const contact = await Contact.create({
        organization,
        lastName,
        firstName,
        email,
        password,
        website,
        verificationToken,
        verificationExpires
      });

      await emailService.sendVerificationEmail(email, verificationToken);

      const token = this.signToken(contact._id);

      return res.status(201).json({
        success: true,
        message: 'Registration successful. Please check your email to verify your account.',
        token
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const contact = await Contact.findOne({ email });
      if (!contact || !(await contact.comparePassword(password))) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      const token = this.signToken(contact._id);

      return res.status(200).json({
        success: true,
        token,
        data: {
          contact: {
            id: contact._id,
            email: contact.email,
            firstName: contact.firstName,
            lastName: contact.lastName,
            organization: contact.organization
          }
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async verifyEmail(req, res) {
    try {
      const { token } = req.params;

      const contact = await Contact.findOne({
        verificationToken: token,
        verificationExpires: { $gt: Date.now() }
      });

      if (!contact) {
        return res.status(400).json({
          success: false,
          message: 'Invalid or expired verification token'
        });
      }

      contact.isVerified = true;
      contact.verificationToken = undefined;
      contact.verificationExpires = undefined;
      await contact.save();

      return res.status(200).json({
        success: true,
        message: 'Email verified successfully'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = AuthController;