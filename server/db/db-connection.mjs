// server/db/db-connection.js;
// Create Database Connection

import pgPromise from 'pg-promise';

const pgp = pgPromise({});

//const { Pool } = require('pg');
const db = pgp(DATABASE_URL);


export default db;

