import React, { Component } from 'react'
import Message from './Message'



class AnswerBoard extends React.Component {

    render() {
        return (
            this.props.messages.map(message =>
                <Message
                    content={message.content}  
                    sender={message.sender} 
                    date={message.date}
                    style={{
                        backgroundColor: "blue",
                        border: "1px solid blue",
                        borderRadius: "20px"
                    }}
                />
            )
        )
    }

}



export default AnswerBoard;