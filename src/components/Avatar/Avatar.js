import React, { Component } from 'react'
import ChoseImages from './ChoseImages';
import NameAvatar from './NameAvatar'

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



  render(){
      return(
        <div className="App">
          <ChoseImages fctChoseImage = {this.handleClick}/>
          <NameAvatar />
          <img className='avatarDesign' src={this.state.avatar} />
          </div>
    );
  }

}

export default Avatar;