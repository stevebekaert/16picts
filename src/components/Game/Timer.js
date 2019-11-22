import React, { Component } from 'react';
import { setInterval, clearInterval } from 'timers';

import './Game.css'


class Timer extends Component {
    constructor(props){
        super(props);

        this.initialTime = 10;

        this.state = {
            time: this.initialTime,
            on: false,
            completion: 100,
            gameState: this.props.gameStart
        }

    }

    startTimer = () => {
        console.log('START TIMER');
        this.setState({
            on: true,
            completion: ((this.state.time-1)*100)/this.initialTime
        });
        
        this.timerID = setInterval( () => {
            this.setState({
                time: this.state.time - 1
            });

            this.setState({
                completion: ((this.state.time-1)*100)/this.initialTime
            });

            if (this.state.time <= 0){
                /*clearInterval(this.timerID);
                this.setState({
                    on: false,
                });*/
                this.stopTimer();

                
            }
        }, 1000);
    }

    stopTimer = () =>{
        clearInterval(this.timerID);
        this.setState({
            time: this.initialTime,
            on: false,
            completion: 100
        });

        this.props.isWin();
    }


    initializeTimer = () => {
        this.setState({
            time: this.initialTime,
            completion: 100
        });
    }
    
    componentDidUpdate(){
        console.log('componentDidUpdate');
        if(this.props.gameStart && !this.state.on){
            this.startTimer();
        }
        
        else if(this.props.gameStop && this.state.on){
            this.stopTimer();
        }
        

    }

    render(){
        return (
            <div className="timer-zone" >
                {/* <button onClick={this.startTimer}>GO</button>
                <button onClick={this.initializeTimer}>RESET</button>
                <button onClick={this.stopTimer}>STOP</button>

                <div className= {this.state.on ? 'stop-on' : 'stop-off'} >
                    {this.state.on ? 'EN COURS' : 'STOP'}
                </div> */}


                <div className= 'timer-bar-zone'>
                    <div className='timer-completion' style={{
                        width: `${this.state.completion}%`
                    }} >
                    </div>
                </div>
            </div>
        );
    }
}



export default Timer;