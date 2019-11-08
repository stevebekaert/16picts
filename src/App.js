import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './components/Game.js';
import Header from './components/Header.js';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <router>
          <Switch>
            <Route exact path="/" component={Header}></Route>
            <Route path="/Game" component={Game}></Route>
          </Switch>
        </router>          
       </div>
    )
  }
}

 const Contact = () => {
  return <h2>Aucun Contact en Vue !</h2>;
}

export default App;