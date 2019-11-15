import React from 'react';

const ColorOption = ({color, chooseColor}) => {

    return (
        <div className="color-option" 
             style={{backgroundColor: color}}
             onClick={() => chooseColor(color)}></div>
    )
}

export default ColorOption;