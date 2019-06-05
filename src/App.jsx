import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const URL = 'ws://localhost:3001'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: "Bob",
      messages: []
    }
    this.newMessage = this.newMessage.bind(this);
    this.changeCurrentUser = this.changeCurrentUser.bind(this);
  }
  socket = new WebSocket(URL);
  componentDidMount() {
    this.socket.onopen = function() {
      console.log("Connected to server");
    };
    this.socket.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      const oldMessages = this.state.messages;
      const newMessages = [...oldMessages, msg];
      this.setState({ messages: newMessages });
      console.log(this.state.messages);
    }

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 8, username: "Michelle", content: "Hello there!", type: "incomingMessage"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  newMessage(content) {
    const newUsername = this.state.currentUser;
    const newMessage = {type: "incomingMessage", content, username: newUsername}
    this.socket.send(JSON.stringify(newMessage)); 
    
  }

  changeCurrentUser(user) {
    this.setState({currentUser: user});
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      // const messages= this.state.messages.map(message => (
      //   <Message key={message.id} messageUsername={message.username} messageContent={message.content} messageType={message.type} />
      // ));
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <MessageList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser} newMessage={this.newMessage} changeCurrentUser={this.changeCurrentUser}/>
      
        </div>
      );
    }
  }
}
export default App;


// dummy data for state
// messages: [
//   {
//     id: 1,
//     type: "incomingMessage",
//     content: "I won't be impressed with technology until I can download food.",
//     username: "Anonymous1"
//   },
//   {
//     id: 2,
//     type: "incomingNotification",
//     content: "Anonymous1 changed their name to nomnom",
//   },
//   {
//     id: 3,
//     type: "incomingMessage",
//     content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
//     username: "Anonymous2"
//   },
//   {
//     id: 4,
//     type: "incomingMessage",
//     content: "...",
//     username: "nomnom"
//   },
//   {
//     id: 5,
//     type: "incomingMessage",
//     content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
//     username: "Anonymous2"
//   },
//   {
//     id: 6,
//     type: "incomingMessage",
//     content: "This isn't funny. You're not funny",
//     username: "nomnom"
//   },
//   {
//     id: 7,
//     type: "incomingNotification",
//     content: "Anonymous2 changed their name to NotFunny",
//   }
// ]
