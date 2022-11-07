import express from "express";
import db from "../db/db-connection.js"
const router = express.Router();
//import db from "../db/db-connection.js";

// * get users */
router.get("/", async function (req, res, next) {
  try {
    const user = await db.any("SELECT * FROM user_accounts", [true]);
    res.send(user);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/** post user profile */





export default router;
