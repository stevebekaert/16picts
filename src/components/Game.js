import React, { Component } from 'react';
import '../App.css';
import GameBoard from './GameBoard/GameBoard.js'
import ChatBoard from './Chat/ChatBoard.js'
import PlayerChoice from './Drawer/PlayerChoice'
import Timer from './Timer.js';

const axios = require('axios')
/*import PlayerSelection from '../components/PlayerSelection/PlayerSelection.js'*/

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      choices: [{images:{}}],
      isReady : false,
      gameChosen : ''
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


  render() {
    let playerchoice;
    if(this.state.gameChosen) {
      playerchoice = <PlayerChoice onClick={this.handleChoiceClick} choices={this.state.choices} gameChosen={this.state.gameChosen} selected/>
    } else {
      playerchoice = <PlayerChoice onClick={this.handleChoiceClick} choices={this.state.choices} />
    }

    return( 
        <div className="game">
            <Timer />
            <div className="game-zone">
                <GameBoard />
                <div className="player-choice-zone">
                  {this.state.isReady ?
                  playerchoice  :
                  <div style= {{color: "#000000"}}>Loading...</div> }
                </div>
                <ChatBoard />
            </div>
  
      </div>
  );
  }
}

export default Game