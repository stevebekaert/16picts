import React from 'react'
import './Playerchoice.css'

class PlayerChoiceItem extends React.Component {

    render () {
        
        return (
            this.props.randomNumbers.map((key) =>
            <div className="playerchoice-zone" value={this.props.choices[key].name} onClick={() => this.props.onClick(this.props.choices[key])}>
              <img className="playerchoice-img" src={this.propschoices[key].image.screen_url} alt={this.props.choices[key].name}/>
              <div className="playerchoice-name">{this.props.choices[key].name}</div>           
            </div> )
        )
    }
}

export default PlayerChoiceItem