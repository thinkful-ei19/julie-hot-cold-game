import React from 'react';
import './game.css';


export default function Game(props) {
  return (
      <div className="game">
          <h1>HOT or COLD</h1>
        <form>
            <legend>Make Your Guess</legend>
            <p>
                <input type="text" className="userGuess" />
            </p>
            <p className="guessCount">
                Guess # <span className="active-number">{props.guessNum}</span>
            </p>
        </form>
      </div>
  )
}