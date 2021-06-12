const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
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
