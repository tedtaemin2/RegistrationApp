const { Client } = require('pg');

const client = new Client({
  host: 'ec2-23-23-128-222.compute-1.amazonaws.com',
  port: 5432,
  user: 'ouyyrxwpjlvxri',
  password: '09f52c04d824af4f5865c98ef4353178a117a729cb2b65cddbba33c7c54a9f96',
});
// const client = new Client({

//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (const row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

module.export = client;
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
