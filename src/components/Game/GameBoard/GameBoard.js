import React from 'react';
import DrawingBoard from './DrawingBoard';
import Palette from './Palette';
import GuessZone from '../Guesser/GuessZone';

class GameBoard extends React.Component {
     constructor(props){
       super(props)
   
       this.state = {

         board: this.buildBoard(40),
         isDrawing : false,
         chosenColor: "black"
       }

       this.isDrawing = false;
     }

    buildBoard = (squareSize) => {
       let grid = [];
       for (let x = 0; x < squareSize; x++){
         grid[x]= []
         for (let y = 0; y < squareSize; y++){
           grid[x][y] = 0;
         }
       }

       return grid
    }
   
    drawBoard = (lat, lng) => {
       if (this.state.board[lat][lng] === this.state.chosenColor || !this.state.isDrawing) {
            return
          }
          let updatedBoard = this.updateGrid(this.state.board, lat, lng)
          
          this.setState({
            board: updatedBoard
          })
    }

    resetGrid = () => {
      this.setState({
        board: this.buildBoard(40)
      })
    }

    updateGrid = (grid, lat, lng, color = this.state.chosenColor) => {
      let updateGrid = [...grid];
      updateGrid[lat][lng] = color;

      return updateGrid
    }

    sendPosition = (lat, lng) => {

      if (this.state.board[lat][lng] === this.state.chosenColor) {
        return 
      }
      let updatedBoard = this.updateGrid(this.state.board, lat, lng)
      this.setState({
        actualPosition: [lat, lng],
        board : updatedBoard
      })
      
    }

    handleMouseDown = () => {
        this.setState({isDrawing: true})
    }
    
    handleMouseUp = () => {
        this.setState({isDrawing: false})
    }

    handleColorSelection = (color) => {
      this.setState({
          chosenColor: color
      })
    }

   render(){
      const { board } = this.state
      return(
          <div className='board-canvas' 
               onMouseDown={this.handleMouseDown} 
               onMouseUp={this.handleMouseUp}
               style={{
                 height: "480px",
                 width: "480px"
               }}>
          <DrawingBoard
              board={board}
              drawBoard={this.drawBoard}
              isDrawing={this.state.isDrawing}
              chosenColor={this.state.chosenColor}
              sendPosition={this.sendPosition}
          />
          
          {this.props.isDrawing  
            ? <Palette resetGrid={this.resetGrid} chooseColor={this.handleColorSelection}/>
            : this.props.wordToGuess && <GuessZone wordToGuess={this.props.wordToGuess} /*win={this.props.win}*/ />
          }
          </div>
        );
      }
}
      


export default GameBoard;