import React from 'react'

const Pix = ({drawBoard, color,lat, lng, chosenColor}) =>
    <div className="cell"
        onMouseOver={ () => drawBoard(lat, lng)}
        onClick={() =>  drawBoard(lat, lng)}
        style ={{
            backgroundColor : !color ? 'inherit' : color
        }}
        
    ></div>

export default Pix;