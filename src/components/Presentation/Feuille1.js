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
                    <NavLink className="navPresentationPageLink" activeClassName="active" to="/Feuille2" >Next</NavLink>
                    <NavLink className="navPresentationPageLink" activeClassName="active" to="/" >Place au site !</NavLink>
                </div>
            </div>
            <div className="game">
                <h1 className="titlePres">Présentation</h1>
                <p className="citation">"Se divertir en divertissent les autres"</p>
                <div className="bloctext">
                <div className="blocpropos">
                    <h2>Nous: </h2>
                    <ul>
                        <li>Equipe</li>
                        <li>16 Picts</li>
                        {/* <li></li>
                        <li></li> */}
                    </ul>
                </div>    
                    <div className="blocDemande">
                        <h2>Notre produit: </h2>
                        <ul>
                            <li>Site fonctionnel</li>
                            <li>jeu Pictionnary</li>
                            <li>Pixel Art</li>
                            <li>Thème</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
  }

}

export default Feuille1;