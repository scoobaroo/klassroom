module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'localhost',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'b8bd1618fae9da477f1e48b1be75bd49',
};
