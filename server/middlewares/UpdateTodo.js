const router = require("express").Router();
const pool = require("../utils/dbconnect");

router.put("/:t_id", async (req, res) => {
  try {
    const { t_id } = req.params;
    const { description } = req.body;

    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE t_id = $2",
      [description, t_id]
    );

    res.json({
      message: "Todo was updated!",
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
