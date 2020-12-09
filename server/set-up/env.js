require('dotenv').config();

const JWT_KEY = process.env.JWT_KEY;
const DATABASE_TEST = process.env.DATABASE_TEST;
const DATABASE_URL = process.env.DATABASE_URL;
const NODE_ENV = process.env.NODE_ENV;
const PORT =process.env.PORT;
const DB_URL = NODE_ENV==='test'? DATABASE_TEST: DATABASE_URL;

module.exports = {PORT,DB_URL,JWT_KEY,NODE_ENV}