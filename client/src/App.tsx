import React from "react";
import "./App.css";

import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <Search />
    </div>
  );
}

export default App;
