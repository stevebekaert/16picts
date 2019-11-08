import React from 'react';
import { relative } from 'path';


class Message extends React.Component {

    render = () => {
        return (
            <div
                style={{display:"flex",
                        flexDirection: "column",
                        marginTop: "5px",
                        position:"relative",
                        }}>
                <div className="msg-date"
                    style={{
                        fontSize: "10px",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                    }}>{this.props.date}
                </div>
                <div className="msg-content"
                        style={{
                        wordBreak: "break-all",
                        width: "80%",
                        backgroundColor:  this.props.sender === "myself" ? "green" : "blue",
                        borderRadius: "20px",
                        padding: "5px",
                        fontSize: "12px",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                        }}>{this.props.content}
                </div>
                <div className="sender"
                    style={{
                        fontSize: "11px",
                        right: "0",
                        alignSelf: this.props.sender === "myself" ? "start" : "end"
                    }}>
                        {this.props.sender}
                </div>
            </div>
        )
    }
}

export default Message;