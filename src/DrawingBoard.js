import React from 'react'
import Pix from './Pix.js'

const DrawingBoard = ({board, DrawBoard}) =>
    <div className = 'board-canvas'>
        {board.map((row, x) => 
            <div className='row' key={x}>
                {row.map((col, y) => 
                    <div className='col' key={x+y}>
                       <Pix
                           DrawBoard={DrawBoard}
                           color={board[x][y]}
                           lat={x}
                           lng={y}
                        ></Pix>
                    </div>
                )}
            </div>
        )}
        </div>

export default DrawingBoard;