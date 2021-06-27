import React from 'react'

interface BoardProps {
    tilesInPlay:any[];
}

export default function Board({tilesInPlay}:BoardProps) {

    return (
        <div className="board">
            {tilesInPlay}
        </div>
    )
}
