import React from 'react';

 // Determines if user message contains an image extension
 function isImage(message) {
    const imgExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const messageExtension = message.substring(message.lastIndexOf("."));
    return imgExtensions.includes(messageExtension);
}


export default (props) => (
    <div className="message-system">
        <div className="message">
        {(!isImage(props.message.content) && props.message.type === 'incomingMessage') ?
            <div><span style={{color: props.message.userColor}} className="messageUsername"><strong>{props.message.username}:</strong>   </span>
            <span className="message-content"> {props.message.content}</span></div> 
            : (isImage(props.message.content) && props.message.type === 'incomingMessage') ?
            <div><span style={{color: props.message.userColor}} className="message-username"><strong>{props.message.username}:</strong>   </span>
            <img className="message-pic" src={props.message.content} alt="User sent an image"/></div>
            : <span><em>{props.message.content}</em></span>     
        }
        </div>
    </div>
)