import React, {Component} from 'react';

function Message(props) {
    return (
        <div className="messageSystem">
            <div className="message">
                {props.messageType === "incomingMessage" ?
                    <div><span style={{color: props.color}} className="messageUsername"><strong>{props.messageUsername}:</strong></span>
                    <span className="messageContent"> {props.messageContent}</span></div> :
                    <span className="messageContent"><em>{props.messageContent}</em></span>     
                }
            </div>
        </div>
    )
}

export default Message;