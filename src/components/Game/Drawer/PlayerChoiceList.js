import React from 'react';
import './PlayerChoice.css';


class PlayerChoiceList extends React.Component {
  
    randomNumbers = () => {
      let unique_random = [];

      while (unique_random.length < 3) {
        var random_number = Math.floor(Math.random() * 11);  ;
        if (unique_random.indexOf(random_number) === -1) { 
            unique_random.push( random_number );
        }
    }
     return unique_random
    }

    render() {
      const {choices} = this.props
      let random_numbers = this.randomNumbers()
      let selection = ''
      if(!this.props.gameChosen) {
        selection =  random_numbers.map((key, id) =>
                      <div key={id} className="playerchoice-zone" value={choices[key].name} onClick={() => this.props.onClick(choices[key])}>
                        <img className="playerchoice-img" src={choices[key].image.screen_url} alt={choices[key].name}/>
                        <div className="playerchoice-name">{choices[key].name}</div>           
                      </div> )
      } else {
        selection =   <div className="playerchoice-zone">
                        <div className="playerchoice-name" >{this.props.gameChosen.name}</div>           
                      </div> 
      }

      return (
        selection
      )
      
    }
}

export default PlayerChoiceList