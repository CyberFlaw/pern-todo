const router = require("express").Router();
const pool = require("../utils/dbconnect");

router.delete("/:t_id", async (req, res) => {
  try {
    const { t_id } = req.params;

    const deleteTodo = await pool.query("DELETE FROM todo WHERE t_id = $1", [
      t_id,
    ]);

    res.json({
      message: "Todo was deleted successfully!",
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
