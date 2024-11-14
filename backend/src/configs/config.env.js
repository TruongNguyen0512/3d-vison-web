require('dotenv').config();

// Validate required environment variables
const requiredEnvVars = [
  'DEV_APP_PORT',
  'DEV_DB_HOST',
  'DEV_DB_PORT',
  'DEV_DB_NAME',
  'PRO_APP_PORT',
  'PRO_DB_HOST',
  'PRO_DB_NAME',
  'JWT_SECRET',
  'EMAIL_USER',
  'EMAIL_PASSWORD',
  'BASE_URL'
];

requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is required`);
  }
});

module.exports = process.env;