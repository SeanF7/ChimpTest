import React, {useState} from 'react'
import Board from './Board'
import Tile from './Tile'

export default function Game() {
const [tilesInPlay, settilesInPlay] = useState(4)
  
let correctClickID = 1;
const tempTileArray: any[] = [];
const shuffle = (array: number[]) => {
    let currentIndex = array.length,
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
  };
let numberOfTilesInGame: Array<number> = [
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

let shuffled = shuffle(numberOfTilesInGame).splice(0, tilesInPlay);

const checkClick = (e: any) => {

  if (Number.parseInt(e.target.id) === 1) {
    e.target.style.visibility = "hidden";
    let tiles = document.getElementsByClassName("tile")
    for(let i = 0; i < tiles.length ; i++){
      tiles[i].innerHTML = ""
    }
    correctClickID += 1;

  } else if (Number.parseInt(e.target.id) === tilesInPlay && correctClickID === tilesInPlay) {
    correctClickID = 1;
    settilesInPlay(tilesInPlay + 1);

  } else if (Number.parseInt(e.target.id) === correctClickID) {
    e.target.style.visibility = "hidden";
    correctClickID += 1;
  }
};


for (let i: number = 1; i <= 40; i++) {
    
    if (!shuffled.includes(i)) {
        tempTileArray.push(
        <Tile
            key={i} 
            IDvalue={0} 
            onClick={checkClick}
            isVisible={false}
         />
        );
    } else if (shuffled.indexOf(i) === 0) {
        tempTileArray.push(
        <Tile
            key={i}
            IDvalue={shuffled.indexOf(i) + 1}
            onClick={checkClick}
            isVisible={true}
        />
        );
    } else {
        tempTileArray.push(
        <Tile
            key={i}
            IDvalue={shuffled.indexOf(i) + 1}
            onClick={checkClick}
            isVisible={true}
        />
        );
    }
}
console.log(tempTileArray)

    return (
        <div>
            <Board tilesInPlay={tempTileArray}/>
        </div>
    )
}
