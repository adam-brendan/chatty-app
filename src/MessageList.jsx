import React, {Component} from 'react';
import Message from './Message.jsx';

function MessageList(props) {
    const messages= props.messages.map(message => (
        <Message key={message.id} messageUsername={message.username} messageContent={message.content} messageType={message.type} />
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