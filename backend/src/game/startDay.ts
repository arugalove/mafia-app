export const startDay = (gameState) => {
    // call announce function
    return { ...gameState, gamePhase: "Day" }
}