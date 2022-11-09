import express from "express";
const router = express.Router();
//import db from "../db/db-connection.js";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

export default router;
