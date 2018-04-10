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
            <button type="submit" name="submit" id="guessButton" classname="button">Guess</button>
            <p className="guessCount">
                <span className="guessCount">Guess #</span>
            </p>
            {/* will need prevent default */}
        </form>
      </div>
  )
}