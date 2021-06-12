const { Pool } = require('pg');

const pool = new Pool({
  host: 'ec2-23-23-128-222.compute-1.amazonaws.com',
  port: 5432,
  user: 'ouyyrxwpjlvxri',
  password: '09f52c04d824af4f5865c98ef4353178a117a729cb2b65cddbba33c7c54a9f96',
  ssl: {
    rejectUnauthorized: false,
  },
});
// const client = new Client({

//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

pool.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

// pool.query('SELECT * FROM Registration ORDER BY Time_Stamp DESC', (err, res) => {
//   if (err) throw err;
//   console.log(res);
// client.end();
// });

// module.export = client;
// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({

//   connectionString: process.env.PG_URI,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('Your query: ', text);
//     return pool.query(text, params, callback);
//   },
// };
