const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  origins: ['*'],  // Allow cross-origin requests
});

const { MESSAGE_CHAT } = require("./constants");

app.use(express.static(path.join(__dirname, '/../public')));

// Constants
const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    socket.on(MESSAGE_CHAT, message => {
        io.emit(MESSAGE_CHAT, message)
    });
});

http.listen(PORT, () => {
    console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});
