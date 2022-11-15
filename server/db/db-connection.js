// server/db/db-connection.js;
// import pgPromise from 'pg-promise';

// let DATABASE_URL = process.env.DB_URI
// // Create Database Connection
// const pgp = pgPromise({});

// const db = pgp(DATABASE_URL);
const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DATABASE_URL
  });


export default db;