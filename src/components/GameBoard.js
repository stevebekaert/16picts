import React from 'react';

import DrawingBoard from './DrawingBoard';

import './GameBoard.css';



class GameBoard extends React.Component {
     constructor(props){
       super(props)
   
       this.state = {
         board: this.buildBoard(40),
         isDrawing : false
       }
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
       if (this.state.board[lat][lng] || !this.state.isDrawing){
            return
          }
          let updatedBoard = this.updateGrid(this.state.board, lat, lng)
          
          this.setState({
            board: updatedBoard
          })
    }
        
  updateGrid = (grid, lat, lng) => {
    let updateGrid = [...grid];
    updateGrid[lat][lng] = 1;

    return updateGrid
  }

  handleMouseDown = () => {
    this.setState({isDrawing: true})
    console.log("down")
  }
  
  handleMouseUp = () => {
    this.setState({isDrawing: false})
    console.log("up")
  }

  render(){
    const { board } = this.state
    return(
      <div className='board' onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
        <DrawingBoard
            board={board}
            drawBoard={this.drawBoard}
            isDrawing={this.state.isDrawing}
          />
      </div>
    );
  }
}
      


export default GameBoard;