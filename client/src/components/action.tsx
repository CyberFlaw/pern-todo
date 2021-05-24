import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";

export default function Actions(props: any) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/todo/${props.todoId.t_id}`)
      .then(() => {
        toast("Todo Deleted Successfully!");
      })
      .catch(() => {
        toast("Woops! We had encountered some Error");
      });
  };

  const handleEdit = () => {
    const change = prompt("Enter new value");
    axios
      .put(`http://localhost:8000/todo/${props.todoId.t_id}`, {
        description: change,
      })
      .then(() => {
        toast("Todo Edited Successfully!");
      })
      .catch(() => {
        toast("Woops! We had encountered some Error");
      });
  };

  return (
    <div className="action">
      <ToastContainer />
      <button className="edit" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
