const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async sendVerificationEmail(email, verificationToken) {
    try {
      const verificationUrl = `${process.env.BASE_URL}/api/v1/verify-email/${verificationToken}`;
      
      const mailOptions = {
        from: `"3D Vision" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Email Verification',
        html: `
          <h1>Verify Your Email</h1>
          <p>Please click the link below to verify your email address:</p>
          <a href="${verificationUrl}">Verify Email</a>
          <p>This link will expire in 24 hours.</p>
        `
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Email sending error:', error);
      throw new Error('Failed to send verification email');
    }
  }
}

module.exports = new EmailService();