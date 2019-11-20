import React, { Component } from 'react';

import './PlayerScore.css';


class PlayerScore extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    ranking = (players) => {
        let rank = [];

        players.map((player, index) => {
            rank.push([index ,player.score])
        });

        let playerRank = 1;
        let maxRank = 0;
        let indexMaxCurrentRank = 0;
        let indexSpliceRank = 0;

        while(rank.length > 0 ){
            maxRank = rank[0][1];

            for(let i=0; i<rank.length; i++){
                if(rank[i][1] >= maxRank){
                    maxRank = rank[i][1];
                    indexMaxCurrentRank = rank[i][0];
                    indexSpliceRank = i;
                }   
            }

            players[indexMaxCurrentRank].rank = playerRank;

            rank.splice(indexSpliceRank, 1);

            playerRank ++;
        } 
    }

    setTranslate = (rank) => {
        let purcentOfTranslate = 0
        purcentOfTranslate = purcentOfTranslate + ((rank-1)*104);
        return purcentOfTranslate;
    }

    render(){
      return(
            <div className="PlayerScore">
                {this.ranking(this.props.players)}
                {this.props.players.map(player => {
                    return(
                        <div className="Player" data-order={player.rank} style={{
                            transform: `translate(${this.setTranslate(player.rank)}%)`,
                            /*zIndex: `${player.rank}`*/
                        }}>
                            <div>{player.pseudo}</div>
                            <div>{player.score}</div>
                            <img src={player.avatar}></img>
                            <div>{player.isDrawing ? 'DRAW' : 'GUESS'}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}



export default PlayerScore;