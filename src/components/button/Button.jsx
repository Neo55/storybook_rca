import React, { useState } from "react";
import './Button.css'

function Button(props) {

  return (
    <div>
      <p>{props.text}</p>
      <button className={`btn ${props.type}`}>{props.title}</button>
    </div>
  );
}

export default Button;
