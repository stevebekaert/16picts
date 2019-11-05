import React, { Component } from 'react';
import DrawingBoard from './DrawingBoard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      board: this.buildBoard(6)
    }

  }

  buildBoard = (squareSize) => {
    console.log('I am in my function');
    console.log(squareSize);

    // A simple cool way //

    // let grid = [];
    // for (let x = 0; x < squareSize; x++){
    //   grid[x] = new Array(squareSize).fill(0);
  
    // Classic way //

    // let grid = [];
    // for (let x = 0; x < squareSize; x++){
    //   grid[x]= []
    //   for (let y = 0; y <squareSize; y ++){
    //     grid[x][y] = 0;
    //   }
    // }

    let grid;
    const ruler = new Array(squareSize).fill("1")

    return ruler.map(x => ruler.map(y => 0))
    // OU // return ruler.map(x => ruler.map(y => 0))
    
    }

    DrawBoard = (lat, lng) => {
      let updatedBoard = this.updatedGrid(this.state.board, lat, lng)
      
      this.setState({
        board: updatedBoard
      })
      // this.setState({
      //   board: newBoard
      // })
      // let newBoard = this.state.board
    }
    
    updateGrid = (grid, lat, lng) => {
      let updatedGrid = [...grid];
      updatedGrid[lat][lng] = 1;

      return updatedGrid
    }

  render(){
    const { board } = this.state
    return(
      <div className="App">
      <header className="App-header">
        <div className='board-canvas'>

        <DrawingBoard
         board={board}
         drawBoard={this.DrawBoard}
         >
        </DrawingBoard>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
