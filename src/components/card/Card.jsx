import React from "react";
import Moment from "react-moment";
import "./Card.css";
import logo from "../../../public/logo192.png";

function Card(props) {
  return (
    <div>
      <div className="content">
        <div className="header">
          <div>
            <img className="imgContainer" src={logo} alt="" />
            <button>Upload img</button>
          </div>
          <div className="titleText">{props.title}</div>
          <div className="descriptionText">{props.description}</div>
          <Moment>{props.datePost}</Moment>
        </div>
        <div className="footer">
          <div className="hashtag">{props.hash}</div>
          <button>{props.buttonText}</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
