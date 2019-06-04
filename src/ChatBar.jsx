import React, {Component} from 'react';

function ChatBar(props) {
    const onEnter = (event) => {
        if (event.keyCode == 13 && event.shiftKey == false) {
            event.preventDefault();
            props.newMessage(event.target.value);
            event.target.value = "";
        }
    }
    return (
        <div>
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser}/>
                <textarea className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyDown={onEnter}/>
            </footer>
        </div>
    )
}

export default ChatBar;