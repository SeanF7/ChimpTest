import React from "react";

function Tile(props) {
  return (
    <button
      className="tile"
      style={props.style}
      onClick={props.onClick}
      id={props.id}
    >
      {props.id}
    </button>
  );
}

export default Tile;
