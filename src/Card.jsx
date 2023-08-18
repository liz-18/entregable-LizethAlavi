import React from "react";

function Card({ color, text }) {
  return (
    <div className="card">
      <h2>Color seleccionado:</h2>
      <div
        className="color-box"
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <p>{color}</p>
      
      
      <p>Texto ingresado: {text}</p>
    </div>
  );
}

export default Card;