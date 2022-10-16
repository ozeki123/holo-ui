import React from "react";
import "./TextArea.scss";

const TextArea = (props) => {
  return (
    <div className="textarea-container">
      <label>{props.label}</label>
      <textarea
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  )
}

export default TextArea
