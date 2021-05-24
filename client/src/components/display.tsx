import Actions from "./action";

import "./style.css";

export default function ShowTodo(props: any) {
  return (
    <div className="display-port">
      <div className="table">
        <div className="table-header">
          <div className="col1">ID</div>
          <div className="col2">Description</div>
          <div className="col3">Action</div>
        </div>

        {props.todo.map(
          (item: { t_id: number; description: string }, index: number) => {
            return (
              <div
                className={
                  index % 2 === 0 ? "table-content-1" : "table-content-2"
                }
                key={item.t_id}
              >
                <div className="col1">{index + 1}</div>
                <div className="col2">{item.description}</div>
                <div className="col3">
                  <Actions todoId={item} />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
