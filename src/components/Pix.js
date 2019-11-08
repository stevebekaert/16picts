import React from 'react'

const Pix = ({drawBoard, color, lat, lng, isDrawing}) =>
<div className="cell"
    
    onMouseOver={ isDrawing ? () => drawBoard(lat, lng) : undefined}
    style ={{
        backgroundColor : !color ? 'inherit' : 'red'
    }}
>

</div>
;


export default Pix;