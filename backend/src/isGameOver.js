export const isGameOver = (gameState) => {

    const filterPlayersByFaction = (players, faction) => {
        return players.filter(player => player.faction === faction)
    }

    const checkWinCondition = (gameState) => {
        const village = filterPlayersByFaction(gameState.players, "Village").length;
        const mafia = filterPlayersByFaction(gameState.players, "Mafia").length;
        if (village <= mafia) return {...gameState, winner: "Mafia"};
        if (mafia === 0) return {...gameState, winner: "Village"};
        return null;
    }

    if (checkWinCondition(gameState) !== null) return true;
    return false;
}
