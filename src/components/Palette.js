import React from "react"

class Palette extends React.Component {

    render = () => {
        return (
            <div className="palette-container">
                <div>
                    <div style={{borderRadius: "50%"}}>Red</div>
                    <div style={{borderRadius: "50%"}}>Green</div>
                    <div style={{borderRadius: "50%"}}>Blue</div>
                </div>
            </div>
        )
    }
}

export default Palette;