import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard.js'
import ChatBoard from './components/ChatBoard.js'
import PlayerChoice from './components/Drawer/PlayerChoice'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      choices: []
    }
  }
/*
  componentDidMount(){
        fetch("https://www.giantbomb.com/api/characters/?api_key=dce469af616144d408b3299fbc5084e8980edabd&limit=3&field_list=name&format=jsonp&json_callback=fetch", {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        }) 
    .then(response => response.json())
      .then(data => 
        this.setState({
        choices: data.results
      }))
  }
*/

  render(){
    console.log(this.state.choices)
    return(
      <div className="App">
        <GameBoard />
        <PlayerChoice choices={this.state.choices}/>
        <ChatBoard />
      </div>
  );
  }
}

export default App;
