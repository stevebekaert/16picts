import React from 'react';

const MessageInput = ({addMessage, confirmMessage, currentMessage, gameChosen}) => {

    return (
    <form className="chat-form" onSubmit={(event) => confirmMessage(event)}>
        <input type="text" value={currentMessage} onChange={(event) => addMessage(event)}></input>
    </form>
    )
}

export default MessageInput;