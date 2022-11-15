// server/db/db-connection.js;
import pgPromise from 'pg-promise';

// Create Database Connection
const pgp = pgPromise({});

const db = pgp('postgres://localhost:5432/skinapp');

//import pg from pg
//const { Pool } = require('pg');
// const { Pool } = pg;
// const db = new Pool({
//     connectionString: process.env.DATABASE_URL
//   });


export default db;

