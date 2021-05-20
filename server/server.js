const express = require("express");
const app = express();

const cors = require("cors");

const createTodo = require("./middlewares/CreateTodo");
const showTodos = require("./middlewares/ShowTodos");
const showTodo = require("./middlewares/ShowTodo");
const updateTodo = require("./middlewares/UpdateTodo");
const deleteTodo = require("./middlewares/DeleteTodo");

const main = () => {
  const port = process.env.PORT || 8000;

  app.use(express.json());
  app.use(cors());

  app.use("/todo", createTodo);
  app.use("/todo", showTodos);
  app.use("/todo", showTodo);
  app.use("/todo", updateTodo);
  app.use("/todo", deleteTodo);

  app.listen(port, () =>
    console.log(`[STATUS] Server Started on Port ${port}`)
  );
};

main();
