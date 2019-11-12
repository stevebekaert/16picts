import React, { Component } from 'react';
import '../App.css';
import GameBoard from './GameBoard/GameBoard.js'
import ChatBoard from './Chat/ChatBoard.js'
import PlayerChoice from './Drawer/PlayerChoice'
import Timer from './Timer.js';
/*import PlayerSelection from '../components/PlayerSelection/PlayerSelection.js'*/

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      choices: []
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
      

  render(){
    return(
        <div className="game">
            <Timer />
            <div className="game-zone">
                <GameBoard />
                <PlayerChoice choices={this.state.choices}/>
                <ChatBoard />
            </div>
  
      </div>
  );
  }
}

export default Game