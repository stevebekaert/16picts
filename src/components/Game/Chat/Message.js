import React from 'react';

class Message extends React.Component {
    componentDidUpdate() {
        this.newData.scrollIntoView({ behavior: "smooth" })
    }

    isSameSender = () => {
        if (this.props.sender === this.props.currentPlayer.pseudo) {
        return true
        } else { 
        return false
        }
    }

    render = () => {
        let styles = {
            wordBreak: "break-all",
            width: "80%",
            backgroundColor:  this.props.sender === this.props.currentPlayer.pseudo ? "rgba(15, 15, 160, 0.5)" : "rgba(15, 160, 15, 0.5)",
            borderRadius: "20px",
            padding: "5px",
            fontSize: "12px",
            alignSelf: this.isSameSender() ? "start" : "end"
            }
        return (
            <div className="each-message" ref={(ref) => this.newData = ref}
                style={{display:"flex",
                        flexDirection: "column"
                        }}>
                <div className="msg-date"
                    style={{
                        fontSize: "12px",
                        alignSelf: this.isSameSender() ? "start" : "end"
                    }}>{this.props.date}
                </div>
                <div className="msg-content" 
                        style={styles}>{this.props.content}
                </div>
                <div className="sender"
                    style={{
                        fontSize: "11px",
                        right: "0",
                        color: "white",
                        alignSelf: this.props.sender === this.props.currentPlayer.pseudo ? "start" : "end"
                    }}>
                        {this.props.sender}
                </div>
            </div>
        )
    }
}
export default Message;