import React from "react";
import "./App.css";

import Search from "./components/search";
import ShowTodo from "./components/display";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <Search />
      <ShowTodo />
    </div>
  );
}

export default App;
