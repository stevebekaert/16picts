import React from 'react';

const MessageInput = ({addMessage, confirmMessage, currentMessage}) => {

    return (
        <div className="messageInput">
            <form onSubmit={(event, currentMessage) => confirmMessage(event, currentMessage)}>
                <input type="text" value={currentMessage} onChange={(event) => addMessage(event)}></input>
            </form>
        </div>
    )
}

export default MessageInput;