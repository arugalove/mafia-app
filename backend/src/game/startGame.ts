export const startGame = (players) => {
    return (
        {
            winner: null,
            errorMessage: '',
            isGameOver: false,
            gamePhase: null,
            announcements: '', 
            votes: null, 
            actions: null,
            players: players
        }
    )
}