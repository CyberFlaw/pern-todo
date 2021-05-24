import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export default function Search(props: any) {
  const [value, setValue] = useState("");

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (value !== "") {
      axios
        .post("http://localhost:8000/todo/create", {
          description: value,
        })
        .then(() => {
          toast("Todo Added Successfully!");
        })
        .catch(() => {
          toast("Woops! We had encountered some Error");
        });
    } else {
      toast("Please Enter a Todo");
    }
  };

  return (
    <div>
      <div className="text-input">
        <input
          className="input"
          type="text"
          value={value}
          onChange={handleValueChange}
          placeholder="Enter Todo here..."
        />
        <button className="btn-add" onClick={handleAddTodo}>
          <img
            src="https://img-premium.flaticon.com/png/512/271/271194.png?token=exp=1621626911~hmac=60aedac2e45c70055f0f6531a33c5430"
            alt="add"
          />
          <ToastContainer />
        </button>
      </div>
    </div>
  );
}
