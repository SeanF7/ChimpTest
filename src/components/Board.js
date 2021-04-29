import { render } from "@testing-library/react";
import React from "react";
import Tile from "./Tile";

var idat = 1;
var tilesinplay = 4;

function Board(props) {
  const final = [];

  var i;
  var j = 1;

  var tilearray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
  ];
  var shuffled = shuffle(tilearray).splice(0, tilesinplay);
  for (i = 1; i <= 40; i++) {
    if (!shuffled.includes(i)) {
      final.push(<Tile style={{ visibility: "hidden" }} />);
    } else if (j === 1) {
      final.push(<Tile id={j} onClick={startGame} />);
      j += 1;
    } else {
      final.push(<Tile id={j} onClick={checkClick} />);
      j += 1;
    }
  }
  console.log(shuffled);
  return <div className="board">{final}</div>;
}

export default Board;

function checkClick(params) {
  if (Number.parseInt(params.target.id) === idat) {
    params.target.style.visibility = "hidden";
    idat += 1;
  }
  if (idat === tilesinplay + 1) {
    GameEnded();
  }
}

function GameEnded() {
  tilesinplay += 1;
  Board();
  alert("Fin");
}

function startGame(params) {
  var eles = document.getElementsByClassName("tile");
  var i;
  for (i = 0; i < eles.length; i++) {
    document.getElementsByClassName("tile")[i].innerHTML = "";
  }
  checkClick(params);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
