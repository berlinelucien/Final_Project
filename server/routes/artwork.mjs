import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 
/* GET artwork. */
// server/routes/artwork.mjs`
router.get('/', async function (req, res, next) {

    try {
        const artwork = await db.any('SELECT * FROM artwork', [true]);
        res.send(artwork);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

export default router;
