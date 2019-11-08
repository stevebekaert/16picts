import React from '/react';

class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore : 0
        }
    }

    handleChange = () => (
        this.setState({currentScore : this.state.currentScore})
    ) 


    render = ({name}) => {
        return (
            <div class="player-ranking">
                <div id="playersName">
                    {name}
                </div>
                <div id="playersScore">
                    {this.state.score}
                    </div>>
            </div>
        )
    }
}

export default Ranking;