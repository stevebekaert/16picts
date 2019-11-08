import React from 'react'

import Pix from './Pix.js'



const DrawingBoard = ({board, drawBoard, isDrawing}) =>

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
                           isDrawing={isDrawing}
                        ></Pix>
                    </div>
                )}
            </div>
        )}
    </div>



export default DrawingBoard;