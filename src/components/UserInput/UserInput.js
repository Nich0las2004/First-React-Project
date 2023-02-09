import React, { useState } from "react";
import "./UserInput.css";


const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const ageHandler = (event) => {
    if (event.target.value < 0) {
      console.log("Please write a real age!");
    } else {
      setAge(event.target.value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onBtnSubmit(name, age);
    setAge("")
    setName("")
  };
  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Username</label>
          <br />
          <input type="text" value={name} onChange={nameHandler} />
          <br />
          <label>Age (Years)</label>
          <br />
          <input type="number" value={age} onChange={ageHandler} />
          <br />
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;