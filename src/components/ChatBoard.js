import React, { Component } from 'react';
import MessageInput from './MessageInput';
import AnswerBoard from './AnswerBoard';

class ChatBoard extends Component {
    state = {
        currentInput: '',
        isWriting: false,
        messages: [{content: "Hello World"}]
    }

    handleChange = (event) => {
        this.setState({ isWriting: true })
        this.setState({ 
            currentInput: event.target.value
        });
    }

    handleSubmit = (event, messageToAdd) => {
        this.setState({ isWriting: false })
        let newMessages = this.getNewMessages(messageToAdd);
        this.setState({
            messages: newMessages
        })
        event.preventDefault();   
        this.setState({currentInput: ''})
    }

    getNewMessages = (messageToAdd) => {

        let existingMessages  = this.state.messages;
        let newMessage = { content:  this.state.currentInput, from:"me" }
        existingMessages.push(newMessage)

        return existingMessages;
    }

    render () {
        console.log(this.state)
        return (
            <div>   
                <AnswerBoard
                    messages={this.state.messages}>
                </AnswerBoard>
                { this.state.isWriting ? "..." : ""} 
                <MessageInput type="text" 
                            addMessage={this.handleChange}
                            confirmMessage={this.handleSubmit}
                            currentMessage={this.state.currentInput}>
                </MessageInput>
            </div>
        )   
    }
}

export default ChatBoard;
