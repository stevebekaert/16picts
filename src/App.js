import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Avatar from './components/Avatar/Avatar.js';
import Header from './components/Header.js';
import Game from './components/Game.js';

class App extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      drawer : false,
    }
  }

  handleClickToCreateGame = () => {
    this.setState({drawer : true});


}

  render(){

    return(
      <div className="App visible">
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <Header selectRuler={() => this.handleClickToCreateGame()} />}
            />
            <Route 
              path="/Avatar" 
              render={(routeProps) => <Avatar 
              drawer={this.state.drawer} />}>
            </Route>
            <Route 
              path="/Game" 
              component={Game} >
            </Route>
          </Switch>       
      </div>
    )
  }
  
}



export default App;