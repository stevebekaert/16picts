import React, { Component } from 'react';
import './Game.css';

import GameBoard from './GameBoard/GameBoard.js'
import ChatBoard from './Chat/ChatBoard.js'
import PlayerChoiceList from './Drawer/PlayerChoiceList'
import Timer from './Timer.js';
import PlayerScore from './PlayerScore';
import socketIOClient from 'socket.io-client'

/*import PlayerSelection from '../components/PlayerSelection/PlayerSelection.js'*/

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      choices: [],
      isReady : false,
      players:[],
      gameChosen: "",
      connectedPlayer: [],
      currentPlayer: ''
    }
    this.socket = socketIOClient('http://192.168.0.105:8080') //'http://192.168.0.105:8080'
    this.socket.on("add user", data =>{
      let user = data.newUser;
      let existingUsers = data.existingUsers;
      this.addUser(user, existingUsers)
      })
      
    this.socket.on("warn new user", data => {
      let existingUsers = data.existingUsers;
      this.updateUsersList(existingUsers)
      })
    this.socket.on("chosenGame", data => {
      let chosenGame = data;
      this.updateChosenGame(chosenGame)
      })
    /*this.socket.on("user disconnected", data => {
      this.updateUsersList(data)
    })*/
    
  }

  updateChosenGame = (game) => {
    this.setState({
      gameChosen: game
    })
  }

  addUser = (user, existingUsers) => {
    this.setState({
      currentPlayer: user,
      players: [...existingUsers]
    })
  }

  updateUsersList = (existingList) => {
    this.setState({
      players: [...existingList]
    })
  }

  componentDidMount = () => {
    fetch('http://127.0.0.1:8080/api/getAxios')
      .then(response => response.json())
      .then(response => this.setState({choices: response, isReady: true}))
      //.then(data => this.setState({choices: data}))
            /*.catch(error => console.log(this.setState({choices: this.state.choices.push(error)})))*/
      this.socket.emit("existing users")
      this.socket.emit("new user", this.props.user)
  }



  handleChoiceClick = (name) => {
    this.socket.emit("gameIsChosen", name)
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

          <PlayerScore players={this.state.players} />
      </div>
  );
  }
}

export default Game
