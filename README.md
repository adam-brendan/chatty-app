# ChattyApp

ChattyApp is a full stack web application that uses Node, Express, ReactJS, JavaScript, HTML5, and CSS3. It enables users to chat with each other in real-time over websockets. Users can change their username and even send image URLs over the application.

## Getting Started
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the ```npm install``` command.
3. To start the web server, open a Terminal window, navigate to /chatty-app and use the ```npm run``` command. The app will be served at http://localhost:3000/.
4. To start the web socket, open a new Terminal window, navigate to /chatty-app/chatty_server and use the ```npm run``` command. Any other users who run chatty-app and connect http://localhost:3000/ will be able to communicate with you.
5. If you wish, you can start typing messages right away. When another user connects, the user count will update. Any messages you send at this point will be seen by you and all other connected users.
6. The default username is "Anonymous", but you can change this at any time by typing out a new username and pressing Enter.
7. Be nice to each other!

## Screenshots

!["main page"]
!["user count change"]
!["image message"]
!["main page again"]

## Dependencies
- @babel/plugin-proposal-class-properties
- babel
- jshint
- react
- react-dom

## Dev Dependencies

- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0
- css-loader
- eslint
- eslint-plugin-react
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
