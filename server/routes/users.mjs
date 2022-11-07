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
router.post('/api/me', async (req, res) => {
  const newUser = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    sub: req.body.sub

  }
  console.log(newUser);

  const queryEmail = 'SELECT * FROM user_accounts WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if(resultsEmail.rows[0]){
    console.log(`Thank you ${resultsEmail.rows[0].firstname} for coming back`)
  } else{
  const query = 'INSERT INTO user_accounts(email, firstname, lastname, sub) VALUES($1, $2, $3, $4) RETURNING *'
  const values = [newUser.email, newUser.firstname, newUser.lastname, newUser.sub]
  const result = await db.query(query, values);
  console.log(result.rows[0]);

  }

});




export default router;
