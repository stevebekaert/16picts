import React from 'react'

const Pix = ({drawBoard, color,lat, lng, sendPosition}) =>
    <div className="cell"
        onMouseOver={ () => drawBoard(lat, lng)}
        onClick={() =>  sendPosition(lat, lng)}
        style ={{
            backgroundColor : !color ? 'inherit' : color
        }}
        
    ></div>

export default Pix;