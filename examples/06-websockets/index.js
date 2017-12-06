/**
 * 06-websockets index.js
 *
 * Data doorsturen met WebSockets
 *
 * @author Olaf Janssen (olaf.janssen@fontys.nl)
 */

// laad de server en websockets libraries
var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    port = 8080;

// gebruik de webserver voor statische content uit de public folder
app.use(express.static(__dirname + '/public'));

// start de statische web server
http.listen(port, function(){
    console.log('Server listening on port ' + port);
});

// vang het event op als er een client verbinding maakt met deze server via WebSockets
io.on('connection', onConnection);

var connectedSocket = null;
function onConnection(socket){
    console.log('A new user is connected.');

    connectedSocket = socket;

    // push een berichtje over de socket naar de user(s)
    socket.emit('message','A new user is connected!');
}


/**
 * De code hieronder simuleert alsof er (Arduino) hardware een nieuwe waarde geeft en we dit aan de client
 * willen doorgeven. We sturen elke 5ms een random waarde door.
 */

var value = 50;
setInterval(function(){
    value = value + (Math.random()*2 - 1);
    value = Math.min(100, Math.max(0, value));
    if (connectedSocket){
        connectedSocket.emit('data', {data: value});
    }
},5);
