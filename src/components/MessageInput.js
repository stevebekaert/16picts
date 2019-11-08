import React from 'react';

const MessageInput = ({addMessage, confirmMessage, currentMessage}) => {

    return (
    <form onSubmit={(event, currentMessage) => confirmMessage(event, currentMessage)}>
        <input type="text" value={currentMessage} onChange={(event) => addMessage(event)}></input>
    </form>
    )
}

export default MessageInput;