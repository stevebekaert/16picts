import React, { Component } from 'react'
import Message from './Message'


class AnswerBoard extends Component {

    render() {
        return (
            this.props.messages.map(message =>
                <Message
                    content={message.content}  
                    sender={message.sender} 
                    date={message.date}
                    style={{
                        backgroundColor: "blue",
                        borderRadius: "20px",
                        border: "1px solid #c3c3c3",
                        padding: "0 18px 10px",
                        marginBottom: "20px"
                    }}
                />
            )
        )
    }

}



export default AnswerBoard;