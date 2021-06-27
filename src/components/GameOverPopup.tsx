import React from 'react'

function GameOverPopup(props :any) : any {
    return (props.trigger) ? (
        <div className= "popup">
            <div className= "popup-inner">
                <h1 className="gameover"> Game Over</h1>
                <h2 className="score"> Score of {props.score } </h2>
                <button className = "close-btn" onClick={() => props.setTrigger(false)}><span>Try again</span></button>
            </div>
            
        </div>
    ) : "";
}

export default GameOverPopup
