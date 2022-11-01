import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 
/* GET authors. */
// server/routes/authors.mjs`
router.get('/', async function (req, res, next) {

    try {
        const authors = await db.any('SELECT * FROM blackauthors', [true]);
        res.send(authors);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

export default router;
