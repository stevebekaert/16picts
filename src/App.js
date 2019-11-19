import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Avatar from './components/Avatar/Avatar.js';
import Header from './components/Header.js';
import Game from './components/Game/Game.js';

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      pseudo : '',
      avatar : '',
      id : '',
      isdrawer: false,
  } 
  }

  handleClick = (image) => {
    this.setState({avatar : image});
    // console.log(key);
   }

  myChangeName = (event) => {
    this.setState({pseudo: event.target.value});
    event.preventDefault();
  }

  sendUserToGamePage = (event) => {
    this.setState({id : event.timeStamp});
  }

  handleClickToCreateGame = () => {
    this.setState({isdrawer : true});
}

  render(){

    return(
      <div className="App visible">
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <Header 
                selectRuler={() => this.handleClickToCreateGame()} />}
            />
            <Route 
              path="/Avatar" 
              render={(props) => <Avatar 
              avatar={this.state.avatar}
              pseudo={this.state.pseudo}

              selectImageAvatar={(image) => this.handleClick(image)} 
              selectNameAvatar={(event) => this.myChangeName(event)}
              selectIdAvatar={(event) => this.sendUserToGamePage(event)}

              isdrawer={this.state.isdrawer} />}>
            </Route>

            
            <Route 
              path="/GameGuesser" 
              render={(props) => 
                <Game user={this.state} />}>
            </Route>

            <Route 
              path="/GameDrawer" 
              render={(props) => 
                <Game user={this.state} />}>
            </Route>
            
          </Switch>       
      </div>
    )
  }

}



export default App;