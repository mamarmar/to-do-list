import React from "react";

function Input(props) {
  return (
    <input
      placeholder="Type To-Do"
      onChange={props.handleChange}
      value={props.input}
    >
    </input>
  );
}

export default Input;
