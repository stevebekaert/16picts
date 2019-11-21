// className de la div principal sous le nom de board-canvas
import React, { Component } from 'react'


class MessageInDrowingBoard extends Component{
    constructor(props) {
        super(props)
        this.state= {
        }   
    } 


    render(){
        return(
        <div className = 'board-canvas'>
                <p>The drawer is chosing a word !</p>
                <p>Are you ready !?</p>
        </div>
    )}
}
        export default MessageInDrowingBoard;