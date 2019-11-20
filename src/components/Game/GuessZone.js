import React from 'react';
import './GuessZone.css';
import Letter from './Guesser/Letter';

class GuessZone extends React.Component {
     constructor(props){
       super(props)
   
       this.state = {
            guessWord: this.stringToCaracter(this.props.wordToGuess),
            guessWordHidden: this.hideGuessWord(),
            guessWordVisible: ''
       }
    }
    
    stringToCaracter = (wordToGuess) => {
        let guessWord = wordToGuess.split('');
        console.log('guessWord', guessWord);
        return guessWord;
    }
    
    hideGuessWord = () =>{
        let hiddenWord = [];

        this.stringToCaracter(this.props.wordToGuess).map(letter => {
            return(
                letter === ' '
                ? hiddenWord.push(' ')
                : hiddenWord.push('_')
            )})
        
        return hiddenWord;
    }

    /*updateVisibleGuessWord = () => {

    }*/



    render(){
      return(
            <div className="guess-zone">
                <Letter word={this.props.win ? this.state.guessWord : this.state.guessWordHidden} />
            </div>
        );
    }
}
      

export default GuessZone;