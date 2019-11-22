import React, { Component } from 'react'
import Message from './Message'


class AnswerBoard extends Component {
    render() {
        return (
            this.props.messages.map(message =>
                <Message
                    content={message.content}  
                    sender={message.from} 
                    date={message.date}
                    currentPlayer={this.props.currentPlayer}
                />
            )
        )
    }
}

export default AnswerBoard;