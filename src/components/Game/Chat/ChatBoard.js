import React, { Component } from 'react';

import MessageInput from './MessageInput';
import AnswerBoard from './AnswerBoard';

import socketIOClient from 'socket.io-client'

import '../Game.css'



class ChatBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentInput: '',
            isWriting: false,
            messages: [],
            newMessage: '',
            gameChosen: ''
        }
        this.socket = socketIOClient('http://192.168.0.188:8080')
        this.socket.on('RECEIVE_MESSAGE', data => {
            this.addMessage(data)
        });
    }

    addMessage = data => {
        this.setState({messages:[...this.state.messages, data]})
    }

    handleChange = (event) => {
        this.setState({ isWriting: true })
        this.setState({ currentInput: event.target.value });
    }

    checkMessage = (msg) => {
        let gameChosenName = this.props.gameChosen.name;
        if (gameChosenName && gameChosenName.toUpperCase() === msg.toUpperCase()) {
            let winMessage = this.props.currentPlayer.pseudo + " found the word, congrats!"
            this.props.isWin();
            return winMessage
        }
        return msg
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let newDate = new Date().toLocaleString();
        /*let from = this.whoTalk()*/
        let from = this.props.currentPlayer.pseudo;
        this.setState({ isWriting: false })

        if (this.state.currentInput === this.props.gameChosen.name && this.state.currentInput) {
            let newMessages = this.createNewMessage(true, this.props.currentPlayer.isDrawer, from, newDate) ;

            this.socket.emit('SEND_MESSAGE', {
                content: newMessages.content,
                from: this.props.currentPlayer.pseudo
            })

            if(!this.props.currentPlayer.isDrawer){
                this.props.isWin();
            }
            
        }

        else if (this.state.currentInput !== '') {
            let newMessages = this.createNewMessage(false, this.props.currentPlayer.isDrawer, from, newDate);

            this.socket.emit('SEND_MESSAGE', {
                    content: newMessages.content,
                    from: from
            })
        }

        this.setState({currentInput: ''})
    }    
 
    createNewMessage = (found, isDrawer, from, date) =>{
        let messageCreated = {};

        if (found && isDrawer){
            messageCreated.content = "Drawer can't post the answer.";   
        } 
        else if(found && !isDrawer){
            messageCreated.content = from + ' guessed the word !';
        }
        else {
            messageCreated.content = this.state.currentInput;
        }

        messageCreated.sender = from;
        messageCreated.date = date 

        return messageCreated;
    }

    /*FIND CHARACTER DEMO ONLY */

    whoTalk = () => {
        var lastChar = this.state.currentInput.slice(-5);

        if(lastChar==="#else") {
            return "someone else"
        } else {
            return "myself"
        }
    }
    /***************************/


    render () {
    
        return (
        <div className="chat-zone">
            <div className="answer-zone">   
                <AnswerBoard
                    messages={this.state.messages}
                    currentPlayer={this.props.currentPlayer }>
                </AnswerBoard>
                { this.state.isWriting ? "..." : ""} 
            
            </div>
                <MessageInput type="text" 
                            addMessage={this.handleChange}
                            confirmMessage={this.handleSubmit}
                            currentMessage={this.state.currentInput}
                            gameChosen={this.props.gameChosen}>
                </MessageInput>
        </div>
        )   
    }

}



export default ChatBoard;