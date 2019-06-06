import React, {Component} from 'react';

function Message(props) {
    
    function isImage(message) {
        const imgExtensions = [".jpg", ".jpeg", ".png", ".gif"]
        const messageExtension = message.substring(message.lastIndexOf("."));
        return imgExtensions.includes(messageExtension);
    }

    return (
        <div className="messageSystem">
            <div className="message">
            {(!isImage(props.message.content) && props.message.type === "incomingMessage") ?
                <div><span style={{color: props.message.userColor}} className="messageUsername"><strong>{props.message.username}:</strong></span>
                <span className="messageContent"> {props.message.content}</span></div> 
                : (isImage(props.message.content) && props.message.type === "incomingMessage") ?
                <div><span style={{color: props.message.userColor}} className="messageUsername"><strong>{props.message.username}:</strong></span>
                <img className="messagePic" src={props.message.content} alt="User sent an image"/></div>
                : <span className="messageContent"><em>{props.message.content}</em></span>     
            }
            </div>
        </div>
    )
}

export default Message;