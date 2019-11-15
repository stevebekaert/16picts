import React, { Component } from 'react';

import Game from './components/Game.js'
import Header from './components/Header.js';

import { Switch, Route } from 'react-router-dom';

class App extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      choices: []
    }
  }

  render(){
    return(
      <div className="App">
          <Switch>
            <Route exact path="/" component={Header}></Route>
            <Route path="/Game" component={Game}></Route>
          </Switch>      
      </div>
    )
  }
  
}



export default App;