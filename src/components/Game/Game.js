import React, { Component } from 'react';
import './Game.css';

import GameBoard from './GameBoard/GameBoard.js'
import ChatBoard from './Chat/ChatBoard.js'
import PlayerChoiceList from './Drawer/PlayerChoiceList'
import Timer from './Timer.js';
import PlayerScore from './PlayerScore';
/*import PlayerSelection from '../components/PlayerSelection/PlayerSelection.js'*/


class Game extends Component {

  constructor(props) {
    super(props)

    this.players = [
      {
        pseudo: 'Luc',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 550,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Leon',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 100,
        isDrawing: true,
        win: false
      },

      {
        pseudo: 'Emilie',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 1001,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Jane',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 225,
        isDrawing: true,
        win: false
      },
      
      {
        pseudo: 'Jack',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 10,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Mathias',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 356,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Cindy',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 69,
        isDrawing: true,
        win: false
      },
      
      {
        pseudo: 'John',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 785,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Jean-Luc',
        avatar: 'https://assets0.uniksapp.com/placeholders/users/profile/avatar/male/640/male_1473167824.png',
        score: 236,
        isDrawing: false,
        win: false
      }
    ];

    this.state = { 
      choices: [],
      isReady : false,
      players: this.players,
      gameChosen: "",
      currentPlayer: this.props.user,
    }

  }


  componentDidMount = () => {
    fetch('http://localhost:8080/api/getAxios')
      .then(response => response.json())
      .then(response => this.setState({choices: response, isReady: true}))
      //.then(data => this.setState({choices: data}))
            /*.catch(error => console.log(this.setState({choices: this.state.choices.push(error)})))*/
  }



  handleChoiceClick = (name) => {
    this.setState({
      gameChosen: name
    })
  }
      
  updatingScore(index, score){
    let updatedScore = this.updateScore(this.players, index, score);

    this.setState({
      players: updatedScore
    });
  }

  updateScore(players, index, score){
    let updatedScore = players.slice(0);

    updatedScore[index].score = updatedScore[index].score + score;

    return updatedScore
  }

  handleWin = () =>{
    let playersUpdated = this.state.players;

    playersUpdated.win = true;

    this.setState({
      player: playersUpdated
    })
  }


  render() {
    return( 
        <div className="game">
            <Timer />
            <div className="game-zone">
                <GameBoard 
                  wordToGuess = {this.state.gameChosen.name} 
                  currentPlayer={this.state.currentPlayer}/>
                
                <ChatBoard 
                  gameChosen={this.state.gameChosen} 
                  isWin={this.handleWin} 
                  currentPlayer={this.state.currentPlayer}/>
            </div>

            {!this.state.gameChosen && this.state.currentPlayer.isDrawer
            ?<div className="player-choice-zone">   
              {this.state.isReady 
              ? <PlayerChoiceList onClick={this.handleChoiceClick} choices={this.state.choices} />
              : <div style= {{color: "#000000"}}>Loading...</div> }
            </div>
            : null}


            {/* Bouton Test Score */}
            {/* <div className="zone-test" >
              {this.state.players.map((player, x) => 
                <div className="player-test">
                  <div>{player.pseudo} score: {player.score}</div>
                  <button onClick={() => {this.updatingScore(x, 100)}} >+100</button>
                  <button onClick={() => {this.updatingScore(x, -100)}} >-100</button>
                </div>
              )}
            </div> */}

          <PlayerScore players={this.players} />
      </div>
  );
  }
}

export default Game
