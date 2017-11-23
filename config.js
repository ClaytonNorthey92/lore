module.exports = {
  port: process.env.LORE_PORT || 3000,
  host: process.env.LORE_HOST || '0.0.0.0',
  database: {
    port: process.env.DB_PORT || 27017,
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || null,
    password: process.env.DB_PASSWORD || null,
    name: process.env.DB_NAME || 'lore_dev'
  }
};