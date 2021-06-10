const { Pool } = require('pg');
const URI = `postgres://iepamckw:pE42xJlQsvcgmJLFiwAsmzRt6LLmupEE@batyr.db.elephantsql.com/iepamckw`
const pool = new Pool({
  connectionString: URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log("Your query: ", text);
    return pool.query(text, params, callback);
  }
}