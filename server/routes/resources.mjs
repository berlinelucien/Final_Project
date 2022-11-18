import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();


// * get resources */
router.get("/", async function (req, res, next) {
  try {
    const resources = await db.any("SELECT * FROM resources", [true]);
    res.send(resources);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


export default router;