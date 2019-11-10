import React from 'react'
import Pix from './Pix.js'

const DrawingBoard = ({board, drawBoard, chosenColor, pixWidth, pixHeight, sendPosition}) =>
    <div className = 'board-canvas'>
        {board.map((row, x) => 
            <div className='row' key={x}>
                {row.map((col,y) => 
                    <div className='col' key={x+y}>
                       <Pix
                           drawBoard={drawBoard}
                           color={board[x][y]}
                           lat={x}
                           lng={y}
                           chosenColor={chosenColor}
                           pixwidth={pixWidth}
                           pixHeight={pixHeight}
                           sendPosition={sendPosition}
                        ></Pix>
                    </div>
                )}
            </div>
        )}
        </div>

export default DrawingBoard;