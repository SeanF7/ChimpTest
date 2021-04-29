import React, { Component } from "react";
import Tile from "./Tile";

export default class Board extends Component {
  idat = 1;
  tilesinplay = 4;
  final = [];
  Board(props) {
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
    var shuffled = this.shuffle(tilearray).splice(0, this.tilesinplay);
    for (i = 1; i <= 40; i++) {
      if (!shuffled.includes(i)) {
        this.final.push(<Tile style={{ visibility: "hidden" }} />);
      } else if (j === 1) {
        this.final.push(<Tile id={j} onClick={this.startGame} />);
        j += 1;
      } else {
        this.final.push(<Tile id={j} onClick={this.checkClick} />);
        j += 1;
      }
    }
  }

  checkClick(params) {
    if (Number.parseInt(params.target.id) === this.idat) {
      params.target.style.visibility = "hidden";
      this.idat += 1;
    }
    if (this.idat === this.tilesinplay + 1) {
      this.GameEnded();
    }
  }

  GameEnded() {
    this.tilesinplay += 1;
    this.Board();
    alert("Fin");
  }

  startGame(params) {
    var eles = document.getElementsByClassName("tile");
    var i;
    for (i = 0; i < eles.length; i++) {
      document.getElementsByClassName("tile")[i].innerHTML = "";
    }
    this.checkClick(params);
  }

  shuffle(array) {
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

  render() {
    return <div className="board">{this.final}</div>;
  }
}
