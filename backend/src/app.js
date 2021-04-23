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

  // io.on('connection', (socket) => {
  //   socket.on('chat message', msg => {
  //     io.emit('chat message', msg);
  //   });
  // });

  // http.listen(port, () => {
  //   console.log(`Socket.IO server running at http://localhost:${port}/`);
  // });

  io.sockets.on('connection', function(socket) {

    socket.on('set nickname', function(nickname) {

        user = getUserByNick(nickname);

        if (user) {
            socket.emit('ready', { id: user.id } );
        } else {
            user = registerUser(nickname, socket.id);
        }

        socket.set('nickname', user.nickname, function() {
            socket.set('userID', user.id, function() {
                socket.emit('ready', { id: user.id } );
            });
        });
    });

    socket.on('update visible users', function(users) {
        for (var i in users) {
            socket.join(users[i]);
        }
    });

    socket.on('msg', function(msg) {
        socket.get('nickname', function(err, nickname) {
            var user = users[nickname];

            if (user) {
                socket.broadcast.to(user.id).emit('chat update', { nickname: user.nickname, text: msg });
            }
        });
    });
  });

  function getUserByNick(nickname) {
      return users[nickname];
  }

  function registerUser(nickname, socketID) {
      if (users[nickname] == undefined) {
          var userId = Object.keys(users).length + 100;
          users[nickname] = {
              id: userId,
              nickname: nickname,
              socketId: socketID
          };
      }

      return users[nickname];
  }

}

chat();

// i'm doing a bad thing

// game hasn't started yet
// game starts

// day starts
// announce results from last night
// check if there is a voting majority
// if there is, carry out execution
// check if the game is over
// if not, go to night

// night starts
// check if all night actions are in
// if so, carry out night actions
// check if the game is over
// if not, go to day

// game ends
// game hasn't started yet

// who is the host?
// initial state pre-game that assigns roles and so on
// could be helpful to declare a class with a game state object

// use spread operator (non destructive) instead of mutate game state directly


// returns an array of player objects
// const createPlayers = () => {
//   return players;
// }

// here's what a player object looks like
// {
//     id: 1,
//     username: "Mariah",
//     faction: "Village",
//     alive: true,
//     role: "Villager",
//     vote: null
//     action: null
// }

// initializes a gameObject 

// const startGame = (players) => {
//   return (
//       {
//           errorMessage: '',
//           isGameOver: false,
//           gamePhase: null,
//           announcements: '', 
//           votes: null, 
//           actions: null,
//           players: players
//       }
//   )
// }

// const isGameOver = (gameObject) => {
//   const village = gameObject.aliveVillage.length;
//   const mafia = gameObject.aliveMafia.length;
//   return village <= mafia ? true : false;
// }

// const startDay = (gameObject) => {
//   gameObject.gamePhase = 'day';
//   // call announce function here
// }

// // call this in startDay function
// const announce = (gameObject) => {
//   // emit announcements to all clients
// }

// // client-side function that will update player state
// // const vote = (target) => {
// //     setState({vote: target})
// // }

// // take all the player state objects coming in from the clients
// const vote = (clientState, gameObject) => {
//   // and update the global votes object server-side
//   return votes
// }

// const checkMajority = (gameObject) => {
//   mostVotes = gameObject.candidates.forEach(candidate => {

//   })


// const execute = (gameObject, condemned) => {};

// const startNight = (gameObject) => {};

// const actionsReceived = () => {};

// const executeActions = () => {};

// const endGame = () => {};