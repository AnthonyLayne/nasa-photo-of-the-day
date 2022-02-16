import React from "react";

const Nasa = (props) => {
  return (
    <div className="nasa-image-project">
      <h3>{props.photo.title}</h3>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} />
      <p className="explain"> {props.photo.explanation}</p>
    </div>
  );
};

export default Nasa;
