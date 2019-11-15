import React, { Component } from 'react';
import { setInterval, clearInterval } from 'timers';

import './Timer.css'



class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 10,
            on: false,
            completion: 100
        }

        this.initialTime = 10;
    }

    startTimer = () => {

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
                clearInterval(this.timerID);
                this.setState({
                    on: false,
                });
            }
        }, 1000);
    }



    initializeTimer = () => {
        this.setState({
            time: this.initialTime,
            completion: 100
        });
    }
    
    render(){
        return (
            <div className="timer-zone" >
                <button onClick={this.startTimer} >GO</button>
                <button onClick={this.initializeTimer}>RESET</button>

                <div className= {this.state.on ? 'stop-on' : 'stop-off'} >
                    {this.state.on ? 'EN COURS' : 'STOP'}
                </div>

                <div className= 'timer-bar-zone'>
                    <div className='timer-completion' style={{
                        width: `${this.state.completion}%`
                    }} >
                    </div>
                </div>
                <div className='timer-text'>{this.state.time}</div>
            </div>
        );
    }
}



export default Timer;