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
    axios
      .post("http://localhost:8000/todo/create", {
        description: value,
      })
      .then((res) => {
        // console.log(res);
        toast("Todo Added Successfully!");
      })
      .catch((err) => {
        // console.log(err);
        toast("Woops! We had encountered some Error");
      });
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
        <button className="btn-search">
          <img
            src="https://img-premium.flaticon.com/png/512/598/598489.png?token=exp=1621626863~hmac=fb5224891304e370047d6bc0697e3260"
            alt="search"
          />
        </button>
      </div>
    </div>
  );
}
