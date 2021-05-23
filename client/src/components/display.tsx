import React from "react";
import Actions from "./action";
import "./style.css";

export default function ShowTodo() {
  return (
    <div className="display-port">
      <div className="table">
        <div className="table-header">
          <div className="col1">ID</div>
          <div className="col2">Description</div>
          <div className="col3">Action</div>
        </div>

        <div className="table-content1">
          <div className="col1">1</div>
          <div className="col2">Bleep</div>
          <div className="col3">
            <Actions />
          </div>
        </div>
        <div className="table-content2">
          <div className="col1">1</div>
          <div className="col2">Lorem</div>
          <div className="col3">
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
}
