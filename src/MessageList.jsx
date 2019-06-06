import React, {Component} from 'react';
import Message from './Message.jsx';

function MessageList(props) {
    const messages= props.messages.map(message => (
        <Message key={message.id} message={message} />
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