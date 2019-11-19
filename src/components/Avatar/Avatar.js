import React, { Component } from 'react'
import ChoseImages from './ChoseImages';
import NameAvatar from './NameAvatar'
import {NavLink} from 'react-router-dom';


class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state= {
        pseudo : '',
        avatar : '',
        id : '',
        drawer: this.props.drawer,
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

// sendUserToGamePage = () => {
//   this.setState({id : })
// }


  render(){

  console.log(this.state)
      return(
        <div className="AppAvatar">
          <div className="avatarPage">
            {this.state.avatar ?
            <img className='avatarDesign' src={this.state.avatar} /> :
            <div className="no-image"></div>}
            <h1>Hello {this.state.pseudo}</h1>
            <ChoseImages fctChoseImage = {this.handleClick}/>
            <NameAvatar fctNameAvatar = {this.myChangeName}/>
            {this.state.pseudo && this.state.avatar ?
            <div className="navAvatarPageDiv"><NavLink onClick={() => this.state.sendUserToGamePage()} className="navAvatarPageLink" activeClassName="active" to="Game" >Play</NavLink></div> :
            false}
          </div>
          </div>
    );
  }

}

export default Avatar;