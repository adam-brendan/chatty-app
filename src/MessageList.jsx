import React, {Component} from 'react';

function MessageList(props) {
    return (
        <div>
            <main className="messages">
                {props.messages}
            </main>
        </div>
    )
}

export default MessageList;