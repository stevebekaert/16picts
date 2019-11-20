import React from 'react';

const ColorOption = ({color, chooseColor}) => {

    return (
        <div className="color-option"      
        style={ color === 0
            ? {backgroundImage: 'https://www.icone-png.com/png/28/28100.png'}
            : {backgroundColor: color}}
             onClick={() => chooseColor(color)}></div>
    )
}

export default ColorOption;