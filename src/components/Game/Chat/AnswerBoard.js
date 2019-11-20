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
                    user={this.props.user || {pseudo : "undefined"}} 
                />
            )
        )
    }

}



export default AnswerBoard;