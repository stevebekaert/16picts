import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';


class Header extends Component{
    constructor(props) {
        super(props)
    } 

    // handleClick = () => {
    //     this.setState({drawer : true});
    // }
    
    render(){
        return (
            <div className="heroHeader">
                <div className="logoTitle"><p>16 <span className="title1">P</span><span className="title2">I</span><span className="title1">C</span><span className="title2">T</span><span className="title2">S</span></p></div>
                <div className="terrain">
                <ul className="buttonPlayAndJoinGameUl">
                    <li className="navHomePageLi"><NavLink className="navHomePageLink" activeClassName="active" to="Avatar" >Play</NavLink></li>
                    <li className="navHomePageLi"><NavLink onClick={() => this.props.selectRuler()} className="navHomePageLink" activeClassName="active" to="Avatar">Create game</NavLink></li>
                </ul>
                </div>   
            </div>         
        )
    }

}



export default Header;