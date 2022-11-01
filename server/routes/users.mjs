import express from "express";
const router = express.Router();
//import db from "../db/db-connection.js";


// * get users */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express is working' });
 });

/** POST TO USERS */
export default router;

