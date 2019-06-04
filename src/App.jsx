import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const URL = 'ws://localhost:3001'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
      {
        id: 1,
        type: "incomingMessage",
        content: "I won't be impressed with technology until I can download food.",
        username: "Anonymous1"
      },
      {
        id: 2,
        type: "incomingNotification",
        content: "Anonymous1 changed their name to nomnom",
      },
      {
        id: 3,
        type: "incomingMessage",
        content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
        username: "Anonymous2"
      },
      {
        id: 4,
        type: "incomingMessage",
        content: "...",
        username: "nomnom"
      },
      {
        id: 5,
        type: "incomingMessage",
        content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
        username: "Anonymous2"
      },
      {
        id: 6,
        type: "incomingMessage",
        content: "This isn't funny. You're not funny",
        username: "nomnom"
      },
      {
        id: 7,
        type: "incomingNotification",
        content: "Anonymous2 changed their name to NotFunny",
      }
    ]}
    this.newMessage = this.newMessage.bind(this);
  }
  socket = new WebSocket(URL);
  componentDidMount() {
    this.socket.onopen() {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 8, username: "Michelle", content: "Hello there!", type: "incomingMessage"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  newMessage(content) {
    const newId = this.state.messages.length + 1;
    const newType = "incomingMessage"
    const newUsername = this.state.currentUser.name;
    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages,
    {id: newId, type: newType, content, username: newUsername}
    ];
    this.setState({ messages: newMessages });
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
          <ChatBar currentUser={this.state.currentUser.name} newMessage={this.newMessage}/>
      
        </div>
      );
    }
  }
}
export default App;
