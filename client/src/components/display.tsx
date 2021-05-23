import React, { useState, useEffect } from "react";
import Actions from "./action";
import axios from "axios";

import "./style.css";

export default function ShowTodo() {
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="display-port">
      <div className="table">
        <div className="table-header">
          <div className="col1">ID</div>
          <div className="col2">Description</div>
          <div className="col3">Action</div>
        </div>

        {todos.map((item) => {
          return (
            <div
              className={
                item.t_id % 2 === 0 ? "table-content-1" : "table-content-2"
              }
              key={item.t_id}
            >
              <div className="col1">{item.t_id}</div>
              <div className="col2">{item.description}</div>
              <div className="col3">
                <Actions />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
