import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();


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
router.post("", async (req, res) => {
  const newUser = {
    email: req.body.email,
    name: req.body.name,
    picture: req.body.picture,
    sub: req.body.sub,
  };
  console.log(newUser);

  const queryEmail = "SELECT * FROM user_accounts WHERE email=$1 LIMIT 1";
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  //console.log(resultsEmail);
  if (resultsEmail.length > 0) {
    console.log(`Thank you for coming back`);
  } else {
    const query =
      "INSERT INTO user_accounts(email, name, picture, sub) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [newUser.email, newUser.name, newUser.picture, newUser.sub];
    const result = await db.query(query, values);
    console.log(result);
  }
});


export default router;
