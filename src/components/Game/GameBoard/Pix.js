import React from 'react'

const Pix = ({drawBoard, color,lat, lng, sendPosition}) =>
    <div className="cell"
        onMouseOver={ () => drawBoard(lat, lng)}
        onClick={() =>  sendPosition(lat, lng)}
        style ={{
            backgroundColor : !color ? 'inherit' : color,
            border: !color ? '1px solid rgba(212, 199, 199, 0.5)' : `1px solid ${color}`
        }}
        
    ></div>

export default Pix;