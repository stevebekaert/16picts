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
    isdrawer: false,
    }   

    

}
  



// handleClick = (image) => {
//   this.setState({avatar : image});
//   // console.log(key);
//  }

//  myChangeName = (event) => {
//   this.setState({pseudo: event.target.value});
//   event.preventDefault();
// }

// sendUserToGamePage = (event) => {
//   this.setState({id : event.timeStamp});
// }




  render(){

      return(
        <div className="AppAvatar">
          <div className="avatarPage">
            {this.props.avatar ?
            <img className='avatarDesign' src={this.props.avatar} /> :
            <div className="no-image"></div>}
            <h1>Hello {this.props.pseudo}</h1>
            <ChoseImages fctChoseImage = {this.props.selectImageAvatar}/>
            <NameAvatar fctNameAvatar = {this.props.selectNameAvatar}/>
            {this.props.pseudo && this.props.avatar ?
            <div className="navAvatarPageDiv"><NavLink onClick={(event) => this.props.selectIdAvatar(event)/*à confirmer si je peux le mettre en fonciton ou pas*/} className="navAvatarPageLink" activeClassName="active" to="Game" >Play</NavLink></div> :
            false}
          </div>
          </div>
    );
  }

}

export default Avatar;