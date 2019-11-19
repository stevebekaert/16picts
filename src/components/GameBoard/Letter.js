import React from 'react';
import './GuessZone.css'

class Letter extends React.Component {
     constructor(props){
       super(props)
   
       this.state = {

       }
    }
    
    render(){
      return(
            this.props.word.map(letter => {
                return(
                    <div className="guess-letter" >
                        {letter}
                    </div>
                )
            })
        );
    }
}
      

export default Letter;