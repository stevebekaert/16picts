import React from 'react'

const Pix = ({drawBoard, color, lat, lng}) =>
<div className="cell"
    onMouseMove={() => drawBoard()}
    style ={{
        backgroundColor : !color ? 'inherit' : 'red'
    }}
>

</div>
;


export default Pix;