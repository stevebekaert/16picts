import React, { Component } from 'react';

import Timer from './Timer.js';
import GameBoard from './GameBoard.js';
import ChatBoard from './ChatBoard.js';

import './Game.css';



class Game extends Component {

  render(){
      return(
        <div className="App">
          <div className="App-Header">
            <Timer />
            <div className="drawingBoard-chatBoard">
              <GameBoard />
              <ChatBoard />
            </div>
          </div>
      </div>
    );
  }

}



export default Game;