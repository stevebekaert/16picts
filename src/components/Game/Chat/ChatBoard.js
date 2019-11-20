import React, { Component } from 'react';

import MessageInput from './MessageInput';
import AnswerBoard from './AnswerBoard';

import socketIOClient from 'socket.io-client'

import './chatBoard.css'



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
        this.socket = socketIOClient('http://192.168.0.105:8080')
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

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isWriting: false })

        this.socket.emit('SEND_MESSAGE', {
            content: this.checkMessage(this.state.currentInput),
            from: this.props.user.pseudo
        })

        this.setState({currentInput: ''})
    }

    checkMessage = (msg) => {
        let gameChosenName = this.props.gameChosen.name;
        if (gameChosenName && gameChosenName.toUpperCase() === msg.toUpperCase()) {
            let winMessage = this.props.user.pseudo + " found the word, congrats!"
            this.props.isWin();
            return winMessage
        }
        return msg
    }

/* working without socket
    handleSubmit = (event, messageToAdd) => {
        this.setState({ isWriting: false })
        if (this.state.currentInput === this.props.gameChosen.name && this.state.currentInput) {
            this.setState({
                messages: this.getNewMessages(true),
                currentInput: ''
            })
            this.props.isWin();
            event.preventDefault();
            }
        else { if (this.state.currentInput !== '') {
             let newMessages = this.getNewMessages();
             this.setState({
                 messages: newMessages
             })
             this.setState({currentInput: ''})
            }

            this.socket.emit("message", "Hello")

            event.preventDefault();   
        }
    }    

    getNewMessages = (found = false) => {
        let newDate = new Date().toLocaleString();
        let from = this.whoTalk()
        let existingMessages  = this.state.messages;
        let newMessage;
        found ? newMessage = { content: from + " found the Word", from:"me"} :
        newMessage = { content: from === "myself" ? this.state.currentInput: this.state.currentInput.substring(0, this.state.currentInput.length - 5), 
                            sender: from, 
                            date: "On " + newDate }
        existingMessages.push(newMessage)

        return existingMessages;
    } 
/*

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
        <div>
            <div className="chat-zone">   
                <AnswerBoard
                    messages={this.state.messages}
                    user={this.props.user}>
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