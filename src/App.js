import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Avatar from './components/Avatar/Avatar.js';
import Header from './components/Header.js';
import Game from './components/Game.js';

import './App.css';



class App extends Component{

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