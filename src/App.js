import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard.js'
import ChatBoard from './components/ChatBoard.js'

class App extends Component {

  render(){

    return(
      <div className="App">
        <GameBoard />
        <ChatBoard />
      </div>
  );
  }
}

export default App;
