const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: 'postgres://ouyyrxwpjlvxri:09f52c04d824af4f5865c98ef4353178a117a729cb2b65cddbba33c7c54a9f96@ec2-23-23-128-222.compute-1.amazonaws.com:5432/df813d0cf5qd7',
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
