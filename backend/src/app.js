const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  origins: ['*'],
});
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

const chat = () => {

  app.use(express.static(path.join(__dirname, '/../public')));

  io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

  http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });

}

chat();