const express = require('express');
const WebSocket = require('ws')
const SocketServer = WebSocket.Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Updated each time a user connects - userId: color
const userColors = {}
  
wss.on('connection', (ws) => {

  // Broadcast number of users to all users when a new user connects
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({users: wss.clients.size}));
    }
  });
  
  // STRETCH - Not randomly generated--assigns a colour to a user based on what order they logged in. Default colour is black. Assumes a maximum of four users.
  const userId = uuidv4();
  userColors[userId] = chooseColor();
  function chooseColor() {
    let color = "";
    switch (wss.clients.size) {
      case 1:
        color = "#FF0000"
        break;
      case 2:
          color = "#008000"
          break;
      case 3:
          color = "#0000FF"
          break;
      case 4:
          color = "#FFFF00"
          break;
    }
    return color;
}

  // Sends colour to the user that just connected
  ws.send(JSON.stringify({color: userColors[userId]}));

  // Manages messages received from the front-end
  ws.on('message', function incoming(data) {
    const dataObj = JSON.parse(data);
    dataObj.id = uuidv4();
    if (dataObj.type === "postMessage") {
        console.log(`User ${dataObj.username} said "${dataObj.content}"`);
        dataObj.type = "incomingMessage"
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify(dataObj));
            }
        });
    } else if (dataObj.type === "postNotification") {
        dataObj.type = "incomingNotification"
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify(dataObj));
            }
        });
    }
  });

  ws.on('close', () => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({users: wss.clients.size}));
      }
    });
  })

});