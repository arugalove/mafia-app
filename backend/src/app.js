const express = require('express');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  origins: ['*'],  // Allow cross-origin requests
});

const { MESSAGE_CHAT } = require("./constants");
const logger = require("./logger");

app.use('/', createProxyMiddleware({
    target: "http://localhost:3000",
    changeOrigin: true
}));
app.use(express.static(path.join(__dirname, '/../public')));

// Constants
const PORT = process.env.PORT || 8000;

io.on('connection', (socket) => {
    logger.info("client connected");

    socket.on(MESSAGE_CHAT, message => {
        logger.info(`${MESSAGE_CHAT}: ${message}`);
        io.emit(MESSAGE_CHAT, message)
    });
});

http.listen(PORT, () => {
    logger.info(`Socket.IO server running at http://localhost:${PORT}/`);
});
