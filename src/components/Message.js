import React from 'react';
import { relative } from 'path';


class Message extends React.Component {

    render = () => {
        return (
            <div
                style={{display:"flex",
                        flexDirection: "column",
                        marginTop: "5px",
                        position:"relative"}}>
                <div className="msg-date"
                    style={{
                        fontSize: "0.6em"
                    }}>{this.props.date}
                </div>
                <div className="msg-content"
                        style={{
                        wordBreak: "break-all",
                        width: "100%",
                        backgroundColor: "blue",
                        borderRadius: "20px",
                        padding: "5px"
                        }}>{this.props.content}
                </div>
                <div className="sender"
                    style={{
                        fontSize: "0.6em",
                        alignSelf: "end",
                        right: "0"
                    }}>
                        {this.props.sender}
                </div>
            </div>
        )
    }
}

export default Message;