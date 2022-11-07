import express from "express";
const router = express.Router();
import db from "../db/db-connection.js"

 
/* GET skin condition information. */
// server/routes/skinCondition.mjs`
router.get('/', async function (req, res, next) {

    try {
        const skinCondition = await db.any('SELECT * FROM skin_condition', [true]);
        res.send(skinCondition);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

export default router;
