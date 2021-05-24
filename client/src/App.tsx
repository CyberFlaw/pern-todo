import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Search from "./components/search";
import ShowTodo from "./components/display";

function App() {
  interface Todo {
    t_id: number;
    description: string;
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todo/all")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todos]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <Search />
      <ShowTodo todo={todos} />
    </div>
  );
}

export default App;
