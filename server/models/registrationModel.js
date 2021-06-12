const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
  port: 5432,
  user: 'ouyyrxwpjlvxri',
  password: '09f52c04d824af4f5865c98ef4353178a117a729cb2b65cddbba33c7c54a9f96',
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Your query: ', text);
    return pool.query(text, params, callback);
  },
};
