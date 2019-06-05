import React, {Component} from 'react';
import Message from './Message.jsx';

function MessageList(props) {
    console.log("Color at MessageList:", props.color);
    const messages= props.messages.map(message => (
        <Message key={message.id} color={props.color} messageUsername={message.username} messageContent={message.content} messageType={message.type} />
      ));
    return (
        <div>
            <main className="messages">
                {messages}
            </main>
        </div>
    )
}

export default MessageList;