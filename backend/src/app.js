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

const { MESSAGE_CHAT, MESSAGE_CONNECTED, MESSAGE_USER_JOINED, GAME_ID, MESSAGE_GAME_UPDATE } = require("./constants");
const logger = require("./logger");
const { connected } = require("./messageHandlers/connected");
const { addPlayer } = require('./game/addPlayer');
const { Faction, Role } = require('./game/types');

// app.use('/', createProxyMiddleware({`
//     target: "http://localhost:3000",
//     changeOrigin: true
// }));`

app.use(express.static(path.join(__dirname, '/../public')));

// Constants
const PORT = process.env.PORT || 8000;

io.on(MESSAGE_CONNECTED, (socket) => {
    // When the user connects, send them the current game state
    connected(io);

    // When the user joins a game, add their player id and username 
    // to the game state, then broadcast it to all the clients
    // socket.on(MESSAGE_USER_JOINED, player => {
    //     (async () => {
    //         logger.info(`${MESSAGE_USER_JOINED}: ${username}`);
    //         let gameState = await get(GAME_ID);
    //         player = { // need to add validation for player id and username
    //             ...player,
    //             faction: Faction.Village,
    //             alive: true,
    //             role: Role.Villager,
    //             vote: null,
    //             action: null,
    //             announcements: []
    //         };
    //         gameState = addPlayer(gameState, player);
    //         await set(gameState);
    //         io.emit(MESSAGE_GAME_UPDATE, gameState)
    // });

    // When the user sends a chat message, broadcast it to all the clients
    socket.on(MESSAGE_CHAT, message => {
        logger.info(`${MESSAGE_CHAT}: ${message}`);
        io.emit(MESSAGE_CHAT, message)
    });
});

http.listen(PORT, () => {
    logger.info(`Socket.IO server running at http://localhost:${PORT}/`);
});
