const router = require("express").Router();

const pool = require("../utils/dbconnect");

router.post("/create", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
