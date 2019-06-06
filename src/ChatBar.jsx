import React from 'react';

export default function ChatBar(props) {
    const onEnterMessage = (event) => {
        if (event.keyCode == 13 && event.shiftKey == false) {
            event.preventDefault();
            props.newMessage(event.target.value);
            event.target.value = '';
        }
    };
    const onEnterUser = (event) => {
        if (event.keyCode == 13 && event.shiftKey == false) {
            event.preventDefault();
            props.changeCurrentUser(event.target.value);
        }
    };
    return (
        <div>
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser} onKeyDown={onEnterUser}/>
                <textarea className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyDown={onEnterMessage}/>
            </footer>
        </div>
    )
}