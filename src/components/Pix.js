import React from 'react'

const Pix = ({drawBoard, color, lat, lng, isDrawing}) =>
<div className="cell"
    
    onMouseOver={ () => drawBoard(lat, lng)}
    onClick={() =>  drawBoard(lat, lng)}
    style ={{
        backgroundColor : !color ? 'inherit' : 'red'
    }}
>

</div>
;


export default Pix;