import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Pictionary from './components/Pictionary.js';
import Header from './components/Header.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <router>
          <Switch>
            <Route exact path="/" component={Header}></Route>
            <Route path="/Pictionary" component={Pictionary}></Route>
            <Route path="/App" component={App}></Route>
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