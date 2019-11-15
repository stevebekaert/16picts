import React, { Component } from 'react';

import Timer from './Timer.js';
import GameBoard from './GameBoard.js';
import ChatBoard from './ChatBoard.js';
import PlayerScore from './PlayerScore';

import './Game.css';



class Game extends Component {

  constructor(props){
    super(props);

    this.players = [
      {
        pseudo: 'Lucoaoaoaoaoaoaoaoaoaoaoaoao',
        avatar: '../images/luc.jpg',
        score: 103,
        isDrawing: false
      },
  
      {
        pseudo: 'Bob',
        avatar: '../images/bob.jpg',
        score: 256,
        isDrawing: false
      },
  
      {
        pseudo: 'Jane',
        avatar: '../images/jane.jpg',
        score: 10,
        isDrawing: true
      },
  
      {
        pseudo: 'Emilie',
        avatar: '../images/emilie.jpg',
        score: 554,
        isDrawing: false,
      },

      {
        pseudo: 'Jack',
        avatar: '../images/jack.jpg',
        score: 1002,
        isDrawing: false
      },

      {
        pseudo: 'Cindy',
        avatar: '../images/cindy.jpg',
        score: 102,
        isDrawing: false
      }
    ];

    this.state = {
      players: this.players
    }
  }


  upScore = (index) => {
    console.log('Je suis dans upScore')
    
    let playersUpdate = this.updateScorePlayer(this.state.players, index, 100)

    this.setState({
      players: playersUpdate
    });
  }

  updateScorePlayer = (players, index, score) => {
    console.log('Je suis dans updateScorePlayer')
    console.log('players: ', players)
    console.log('index: ', index)
    console.log('score: ', score)

    let playersScoreUpdated = players.slice(0);
    console.log('playersScoreUpdated', playersScoreUpdated)
    playersScoreUpdated[index].score = playersScoreUpdated[index].score + score;

    return playersScoreUpdated
  }

  render(){
      return(
        <div className="App">
          <div className="drawingBoard-chatBoard">
            <Timer />
            <GameBoard />
            <ChatBoard />
          </div>

          <div>
            {this.state.players.map((player, x) => {
              return(
                <div>
                  <div>{player.pseudo} / Score: {player.score}</div>
                  <button onClick={() => this.upScore(x)} >Score + 100</button>
                </div>
              )
            })}
          </div>

          <PlayerScore players={this.players} />
      </div>
    );
  }

}



export default Game;