import React, { Component } from 'react';
import '../App.css';
import GameBoard from './GameBoard/GameBoard.js'
import ChatBoard from './Chat/ChatBoard.js'
import PlayerChoice from './Drawer/PlayerChoice'
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
        score: 550
      },

      {
        pseudo: 'Leon',
        avatar: './images/Leon.jpg',
        score: 100
      },

      {
        pseudo: 'Emilie',
        avatar: './images/Emilie.jpg',
        score: 1001
      },

      {
        pseudo: 'Jane',
        avatar: './images/Jane.jpg',
        score: 225
      },
      
      {
        pseudo: 'Jack',
        avatar: './images/Jack.jpg',
        score: 10
      },

      {
        pseudo: 'Mathias',
        avatar: './images/Mathias.jpg',
        score: 356
      }
    ];

    this.state = { 
      choices: [],
      players: this.players
    }

    
  }

  componentDidMount(){
    const axios = require('axios');

    axios.get('https://www.giantbomb.com/api/characters/?api_key=dce469af616144d408b3299fbc5084e8980edabd&limit=3&field_list=name&format=jsonp', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
      }).then(function (response) {
        console.log('response is : ' + response.data);
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.headers);
        } 
        else if (error.request) {
            console.log(error.request);
        } 
        else {
          console.log(error.message);
        }
      console.log(error.config);
    });


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

  render(){
    return(
        <div className="game">
            <Timer />
            <div className="game-zone">
                <GameBoard />
                <PlayerChoice choices={this.state.choices}/>
                <ChatBoard />
            </div>

            <div className="zone-test" >
              {this.state.players.map((player, x) => 
                <div>
                  <div>{player.pseudo} score: {player.score}</div>
                  <button onClick={() => {this.updatingScore(x, 100)}} >+100</button>
                  <button onClick={() => {this.updatingScore(x, -100)}} >-100</button>
                </div>
              )}
            </div>

          <PlayerScore players={this.players} />
      </div>
  );
  }
}

export default Game
