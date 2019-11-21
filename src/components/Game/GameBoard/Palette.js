import React from "react"
import ColorOption from './ColorOption';


class Palette extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {
        }
     }

    availableColors = ["#65b2df", "#5bcc8b", "#e6bb46", "#dfb665", "#df7065", "#c365df", "grey", "#000000", 0] 

    render() {
        return (
            <div className="drawer-option">
                <div className="color-container">
                    {this.availableColors.map(color => 
                        <ColorOption key={color} chooseColor={this.props.chooseColor} color={color} />
                    )}
                </div>
                <div className="option-container" >
                    <div className="option-button"
                        onClick={() => this.props.resetGrid()}>
                        <div>RESET</div>
                    </div>
                    <div className="option-game-chosed" >
                        <div>{this.props.wordToGuess}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Palette; 