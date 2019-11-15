import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Avatar from './components/Avatar/Avatar.js';
import Header from './components/Header.js';
import Game from './components/Game.js';

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
            <Route path="/Avatar" component={Avatar}></Route>
            <Route path="/Game"   component={Game}  ></Route>
          </Switch>       
      </div>
    )
  }
  
}



export default App;