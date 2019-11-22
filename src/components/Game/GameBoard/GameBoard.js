import React from 'react';
import DrawingBoard from './DrawingBoard';
import MessageInDrowingBoard from './MessageInDrowingBoard';
import Palette from './Palette';
import GuessZone from '../Guesser/GuessZone';
import socketIOClient from 'socket.io-client'

class GameBoard extends React.Component {
     constructor(props){
       super(props)
   
       this.state = {

         board: this.buildBoard(40),
         isDrawing : false,
         chosenColor: "black"
       }

       this.isDrawing = false;
       this.socket = socketIOClient('http://192.168.0.105:8080') /*http://192.168.0.105:8080'*/
       this.socket.on("gridUpdating", data => {
         this.updateGridFromDrawer(data)
       })
     }

    updateGridFromDrawer = (grid) => {
      this.setState({
        board: grid
      })
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
       if (this.state.board[lat][lng] === this.state.chosenColor || !this.state.isDrawing || !this.props.currentPlayer.isDrawer){
            return
          }
          let updatedBoard = this.updateGrid(this.state.board, lat, lng)
          this.socket.emit("drawing", updatedBoard)
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

      if (this.state.board[lat][lng] === this.state.chosenColor || !this.props.currentPlayer.isDrawer){
        return 
      }
      let updatedBoard = this.updateGrid(this.state.board, lat, lng)
      this.socket.emit("drawing", updatedBoard)
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
          <div className='game-zone-left' 
               onMouseDown={this.handleMouseDown} 
               onMouseUp={this.handleMouseUp}
              >
                
          { !this.props.wordToGuess && !this.props.currentPlayer.isDrawer
      
            ? <MessageInDrowingBoard />
            : <DrawingBoard
            board={board}
            drawBoard={this.drawBoard}
            isDrawing={this.state.isDrawing}
            chosenColor={this.state.chosenColor}
            sendPosition={this.sendPosition} />
          }

          {this.props.currentPlayer.isDrawer  
            ? <Palette 
            resetGrid={this.resetGrid} 
            chooseColor={this.handleColorSelection}
            wordToGuess={this.props.wordToGuess}/>
            : this.props.wordToGuess && <GuessZone wordToGuess={this.props.wordToGuess} win={this.props.currentPlayer.win} />
          }
          </div>
        );
      }
}
      


export default GameBoard;