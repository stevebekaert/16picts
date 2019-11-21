import React, { Component } from 'react';
import '../../App.css';
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

    this.players = [
      {
        pseudo: 'Luc',
        avatar: './images/Luc.jpg',
        score: 550,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Leon',
        avatar: './images/Leon.jpg',
        score: 100,
        isDrawing: true,
        win: false
      },

      {
        pseudo: 'Emilie',
        avatar: './images/Emilie.jpg',
        score: 1001,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Jane',
        avatar: './images/Jane.jpg',
        score: 225,
        isDrawing: true,
        win: false
      },
      
      {
        pseudo: 'Jack',
        avatar: './images/Jack.jpg',
        score: 10,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Mathias',
        avatar: './images/Mathias.jpg',
        score: 356,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Cindy',
        avatar: './images/Cindy.jpg',
        score: 69,
        isDrawing: false,
        win: false
      },
      
      {
        pseudo: 'John',
        avatar: './images/John.jpg',
        score: 785,
        isDrawing: false,
        win: false
      },

      {
        pseudo: 'Jean-Luc',
        avatar: './images/Jean-Luc.jpg',
        score: 236,
        isDrawing: false,
        win: false
      }
    ];

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
    let playersUpdated = this.state.players.slice(0);

    playersUpdated[0].win = true;

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
                  /*win = {this.state.players[0].win} 
                  isDrawing = {this.state.players[1].isDrawing}*/ 
                  socket={this.socket}/>
                   
                <div className="player-choice-zone">
                  {this.state.isReady ?
                    (!this.state.gameChosen ?
                      <PlayerChoiceList onClick={this.handleChoiceClick} choices={this.state.choices} /> :
                      <PlayerChoiceList gameChosen={this.state.gameChosen}/>) :
                  <div style= {{color: "#000000"}}>Loading...</div> }
                </div>
                <ChatBoard user={this.props.user} gameChosen={this.state.gameChosen} isWin={this.handleWin} />
            </div>
          <PlayerScore players={this.state.players} />
      </div>
  );
  }
}

export default Game
