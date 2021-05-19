const router = require("express").Router();

const pool = require("../utils/dbconnect");

router.get("/all", async (_, res) => {
  const showTodo = await pool.query("SELECT * FROM todo");

  res.json(showTodo.rows);
});

module.exports = router;
