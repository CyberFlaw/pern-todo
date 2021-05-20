const router = require("express").Router();
const pool = require("../utils/dbconnect");

router.get("/:t_id", async (req, res) => {
  try {
    const { t_id } = req.params;

    const todo = await pool.query("SELECT * FROM todo WHERE t_id = $1", [t_id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
