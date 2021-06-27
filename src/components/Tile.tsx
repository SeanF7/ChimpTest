import React from "react";

interface TileProps {
    IDvalue: number;
    onClick: any;
    isVisible: boolean;
  }

const Tile = ({IDvalue,onClick,isVisible} : TileProps) => {

  return (
    <button className="tile" onClick={onClick} id={IDvalue.toString()} style={{ visibility: isVisible ? "visible" : "hidden" }}>
      {IDvalue}
    </button>
  );
};

export default Tile;
