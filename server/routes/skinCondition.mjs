import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

/* GET skin condition information. */
// server/routes/skinCondition.mjs`
router.get("/", async function (req, res, next) {
  try {
    const skinCondition = await db.any("SELECT * FROM skin_condition", [true]);
    res.send(skinCondition);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


//A put request - Update user notes
// app.put('', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })
export default router;
