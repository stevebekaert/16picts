import React from 'react'
import Message from './Message'


class AnswerBoard extends React.Component {

    render() {
        return (
            this.props.messages.map(message =>
                <Message
                    content={message.content}  
                    from={"me"} 
                    style={{
                        backgroundColor: "blue",
                        border: "1px solid blue",
                        borderradius: "20px"
                    }}
                />
            
            )
        )
    }
}

export default AnswerBoard;