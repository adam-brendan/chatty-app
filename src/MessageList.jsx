import React from 'react';
import Message from './Message.jsx';

export default (props)  => (
    <div>
        <main className="messages">
            {props.messages.map(message => (
    <Message key={message.id} message={message} />
    ))}
        </main>
    </div>
)