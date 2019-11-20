import React, { Component } from 'react';
import '../../App.css';
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
        isDrawing: true,
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
      players: this.props.user,
      gameChosen: ""
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
                  win = {this.state.players.win} 
                  isDrawing = {this.state.players.isdrawer} />
                <div className="player-choice-zone">
                  {this.state.isReady ?
                    (!this.state.gameChosen ?
                      <PlayerChoiceList onClick={this.handleChoiceClick} choices={this.state.choices} /> :
                      <PlayerChoiceList gameChosen={this.state.gameChosen}/>) :
                  <div style= {{color: "#000000"}}>Loading...</div> }
                </div>
                <ChatBoard gameChosen={this.state.gameChosen} isWin={this.handleWin} />
            </div>
          <PlayerScore players={this.players} />
      </div>
  );
  }
}

export default Game
