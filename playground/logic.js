// game hasn't started yet
// game starts

// day starts
// announce results from last night
// check if there is a voting majority
// if there is, carry out a lynch
// check if the game is over
// if not, go to night

// night starts
// check if all night actions are in
// if so, carry out night actions
// check if the game is over
// if not, go to day

// game ends
// game hasn't started yet



// returns an array of player objects
const createPlayers = () => {
    return players;
}

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
const startGame = (players) => {

    const getPlayerNamesByFaction = (players, faction) => {
        playerNames = (players.filter(player => {
            player.faction === faction
        }).map(player => player.username));
        return playerNames;
    }

    return (
        {
            gameState: {
                global: {
                    errorMessage: '',
                    isGameOver: true,
                    aliveVillage: getPlayerNamesByFaction(players, 'village'),
                    aliveMafia: getPlayerNamesByFaction(players, 'mafia'),
                    deadPpl: [],
                    gamePhase: null,
                    announcements: '', // results of night actions and mafia kill
                    votes: null, // i.e. { Pancho: 'Lefty', Lefty: 'no lynch' ... }
                    candidates: null, // players that have been nominated for lynch
                    majority: Math.ceil((aliveVillage + aliveMafia) / 2 ),
                    actions: null
                },
                players: players
            }
        }
    )
}

const isGameOver = (gameObject) => {
    const village = gameObject.aliveVillage.length;
    const mafia = gameObject.aliveMafia.length;
    return village <= mafia ? true : false;
}

const startDay = (gameObject) => {
    gameObject.gamePhase = 'day';
    // call announce function here
}

// call this in startDay function
const announce = (gameObject) => {
    // emit announcements to all clients
}

// client-side function that will update player state
// server will go thru all the player state objects 
// and update the votes object
// const vote = (target) => {
//     setState({vote: target})
// }

const vote = (gameObject) => {

}

const checkMajority = (gameObject) => {

}

const lynch = (gameObject, player) => {};

const endDay = () => {

}

const startNight = (gameObject) => {};
const actionsReceived = () => {};
const executeActions = () => {};

const endGame = () => {};