export const isGameOver = (gameState) => {
    const checkWinCondition = (gameState) => {
        const village = (
            gameState.players.filter(player => {
                player.faction === "Village"
            }).length
        );
        const mafia = (
            gameState.players.filter(player => {
                player.faction === "Mafia"
            }).length
        );
        if (village <= mafia) return {...gameState, winner: "Mafia"};
        if (mafia === 0) return {...gameState, winner: "Village"};
        return null;
    };
    if (checkWinCondition(gameState)) return true;
    console.log(gameState.winner);
    return false;
    
}