import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const URL = 'ws://localhost:3001';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: "Anonymous",
      messages: [],
      users: 0,
      userColor: "#000000",
      socket: new WebSocket(URL)
    }
    this.newMessage = this.newMessage.bind(this);
    this.changeCurrentUser = this.changeCurrentUser.bind(this);
  }

  componentDidMount() {
    this.state.socket.onopen = function() {
    };
    // Handles all messages from server
    this.state.socket.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      // If incomingMessage or incomingNotification
      if (msg.type){
        const oldMessages = this.state.messages;
        const newMessages = [...oldMessages, msg];
        this.setState({ messages: newMessages });
      } 
      // If user connects/disconnects
      if (msg.users) {
        this.setState({users: msg.users});
      } 
      // When current user logs in sets colour
      if (msg.color) {
        this.setState({userColor: msg.color})
      }
    }
  }

  // Sends message to server
  newMessage(content) {
    const newMessage = {type: "postMessage", content, username: this.state.currentUser, userColor: this.state.userColor}
    this.state.socket.send(JSON.stringify(newMessage)); 
    
  }
  // Sends username change notification to server and changes state
  changeCurrentUser(user) {
    const userChange = {type: "postNotification", content: `${this.state.currentUser} has changed their name to ${user}.`}
    this.state.socket.send(JSON.stringify(userChange));
    this.setState({currentUser: user});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <div className="navbar-brand" id="num-users">{this.state.users} {this.state.users === 1 ? "user" : "users"} online</div>
        </nav>
        <MessageList messages={this.state.messages} color={this.state.userColor} />
        <ChatBar currentUser={this.state.currentUser} newMessage={this.newMessage} changeCurrentUser={this.changeCurrentUser}/>
    
      </div>
    );
  }
}
export default App;