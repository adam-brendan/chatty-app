import React, {Component} from 'react';

function Message(props) {
    
    function isImage(message) {
        const imgExtensions = [".jpg", ".jpeg", ".png", ".gif"]
        imgExtensions.forEach(function(extension) {
            if (props.message.content.includes(extension)) {
                return true;
            }
            return false;
        })
    }

    return (
        <div className="messageSystem">
            <div className="message">
                {props.message.type === "incomingMessage" ?
                    <div><span style={{color: props.message.userColor}} className="messageUsername"><strong>{props.message.username}:</strong></span>
                    <span className="messageContent"> {props.message.content}</span></div> :
                    <span className="messageContent"><em>{props.message.content}</em></span>     
                }
            </div>
        </div>
    )
}

export default Message;