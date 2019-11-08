import React from 'react'


const Pix = ({drawBoard, color, lat, lng}) =>

    <div className="cell"
        onMouseOver={() => drawBoard(lat, lng)}
        style ={{
            backgroundColor : !color ? 'inherit' : 'red'
        }}
    >
    </div>

;



export default Pix;