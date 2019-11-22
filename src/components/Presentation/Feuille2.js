import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Presentation.css'


class Feuille1 extends Component {
  constructor(props) {
    super(props)
    this.state= {
    }   
}

  render(){

      return(
        <div className="AppPresentation">
            <div className="navBarPresentation">
                <div className="logoTitlePres"><p>16 <span className="title1">P</span><span className="title2">I</span><span className="title1">C</span><span className="title2">T</span><span className="title2">S</span></p></div>
                <div className="navLinkFeuille">
                    <NavLink className="navPresentationPageLink" activeClassName="active" to="/Feuille1" >Return</NavLink>
                    <NavLink className="navPresentationPageLink" activeClassName="active" to="/" >Place au site !</NavLink>
                </div>
            </div>
            <div className="game">
                <h1 className="titlePres">Rejoignez - nous !</h1>
                <div className="bloctext">    
                    <div className="blocDemande">
                        <h2 className="http">HTTP://192.168.0.188:5000</h2>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Feuille1;