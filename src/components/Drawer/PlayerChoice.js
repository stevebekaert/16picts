import React from 'react';
import './PlayerChoice.css';


class PlayerChoice extends React.Component {
  
    randomNumbers = () => {
      const {choices} = this.props
      let unique_random = [];

      while (unique_random.length < 3) {
        var random_number = Math.floor(Math.random() * 11);  ;
        if (unique_random.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random.push( random_number );
        }
    }
     return unique_random
    }

    render() {
      const {choices} = this.props
      let random_numbers = this.randomNumbers()
      let selection = ''
      if(!this.props.selected) {
        selection =  random_numbers.map((key) =>
                      <div className="playerchoice-zone" value={choices[key].name} onClick={() => this.props.onClick(choices[key].name)}>
                        <img className="playerchoice-img" src={choices[key].image.screen_url} alt={choices[key].name}/>
                        <div className="playerchoice-name">{choices[key].name}</div>           
                      </div> )
      } else {
        selection =   <div className="playerchoice-zone">
                        <div className="playerchoice-name">{this.props.gameChosen}</div>           
                      </div> 
      }

      return (
        selection
       
      )
      
    }
}

export default PlayerChoice