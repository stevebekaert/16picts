import React, { Component } from 'react'
import ChoseImages from './ChoseImages';
import NameAvatar from './NameAvatar'
import {NavLink} from 'react-router-dom';

// creer un composent qui accepte plusieurs composent:
// le choix de l'image
// le choix du nom
// le bouton "envoyer" avec les routes
// le menu burger (fais par Marine)



class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state= {
        pseudo : '',
        avatar : '',
        id : '',
        gameMaster : '',

    }   
}

handleClick = (image) => {
  this.setState({avatar : image});
  // console.log(key);
 }

 myChangeName = (event) => {
  this.setState({pseudo: event.target.value});
  console.log(this.state.pseudo)
  event.preventDefault();
}



  render(){
      return(
        <div className="App">
          {this.state.avatar ?
          <img className='avatarDesign' src={this.state.avatar} /> :
          <div className="no-image"></div>}
          <h1>Hello {this.state.pseudo}</h1>
          <ChoseImages fctChoseImage = {this.handleClick}/>
          <NameAvatar fctNameAvatar = {this.myChangeName}/>
          <div className="navAvatarPageDiv"><NavLink className="navAvatarPageLink" activeClassName="active" to="Game" >Play</NavLink></div>
          </div>
    );
  }

}

export default Avatar;