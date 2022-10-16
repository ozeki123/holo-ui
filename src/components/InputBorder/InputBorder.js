import React from "react";
import "./InputBorder.scss";

const InputBorder = (props) => {
  return (
    <div className="input-border-container">
      <label>{props.label}</label>
      <input 
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  )
}

export default InputBorder;
