import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();


router.get("/", async (req, res) => {
  // const id = req.query.notes_id;
  // const user_id = req.query.user_id;
  // const notes = req.query.notes
  console.log("notes id",id)
  try {
    const{ rows: notes } = await db.query(
      "SELECT user_id FROM user_accounts WHERE user_id = notes.user_id",
      [true]);
    res.send(notes);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

/* post request goes here */
router.post("/:id", async (req, res) => {
  const userId = req.params.id;
  const newNotes = {
   
    userId: 1,
  };
  const existing = await db.query(
    "SELECT id FROM notes WHERE users_id = $1 and note_id = $2",
    [newNotes.userId, userId]
  );
  console.log(existing.rows);
  console.log([newNotes.userId, newNotes.noteId]);
 
  if (existing.rows.length >= 1) {
    const nonExisting = await db.query(
      "DELETE FROM notes WHERE id = $1",
      [existing.rows[0].id]
    );
  } else {
    const result = await db.query(
      "INSERT INTO notoes(users_id, note_id) VALUES($1, $2) RETURNING *",
      [newNotes.userId, noteId]
    );
    console.log(result.rows[0]);
  }
  res.json({ key: "success" });
});


export default router
// router.post('/', async (req, res) => {
//     const notes = {
//       id: req.body.id,

//       notes: req.body.notes
//     };
//     console.log(notes);
//     try {
//       const createdNotes = await db.query(
//         'INSERT INTO notes(id, notes) VALUES($1, $2) RETURNING *',
//         [ createdNotes.id, createdNotes.notes]
//       );
//       console.log(req.body);
//       res.send(createdNotes);
//     } catch (e) {
//         console.log(e);
//       return res.status(400).json({ e });
//     }
// })




// * get favorite items */
// Create GET request in server.js that uses the junction table to join the two tables for the Favorites Page for a specific user.

// app.get('/favorites/:id', cors(), async (req, res) => {
//     const user_id = req.params.id;
//     try {
//       const { rows: favorites } = await db.query('SELECT * FROM favorites INNER JOIN skin_condition ON favorites.skin_id = skin_condition.id INNER JOIN user_accounts ON favorites.user_id = users.id WHERE favorites.user_id = $1', [user_id]);
//       res.send(saved);
//     } catch (e) {
//       return res.status(400).json({ e });
//     }
//   });

// //saving favorite skin picture
// app.post('/favorites/:id', cors(), async (req, res) => {
//     const newSaved = {
//         skin_id: req.body.skin_id,
//         user_id: req.body.user_id,
//     }
//     const result = await db.query(
//         'INSERT INTO favorites(skin_id, user_id) VALUES($1, $2) RETURNING *',
//         [newSaved.skin_id, newSaved.user_id],
//       );
//       console.log(result.rows[0]);
//       res.json(result.rows[0]);
// });
    
// app.delete(`/favorites/:id`, cors(), async(req,res) => {
//     const savedId = req.params.id;
//     await db.query('DELETE FROM favorites WHERE id=$1', [savedId]);
//     res.status(200).end();
// });
  
