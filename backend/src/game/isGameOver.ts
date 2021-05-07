import { Player, Faction, GameState } from "./types"

export const filterPlayersByFaction = (players: Player[], faction: Faction): Player[] => {
    return players.filter(player => player.faction === faction)
}

export const filterPlayersByAlive = (players: Player[]): Player[] => {
    return players.filter(player => player.alive === true)
}

export const checkWinCondition = (gameState: GameState): GameState  => {
    const village = filterPlayersByFaction(gameState.players, Faction.Village);
    const numberOfVillagersAlive = filterPlayersByAlive(village).length;
    const mafia = filterPlayersByFaction(gameState.players, Faction.Mafia);
    const numberOfMafiaAlive = filterPlayersByAlive(mafia).length;
    if (numberOfVillagersAlive <= numberOfMafiaAlive) return {...gameState, winner: Faction.Mafia};
    if (numberOfMafiaAlive === 0) return {...gameState, winner: Faction.Village};
    return gameState;
}

export const isGameOver = (gameState: GameState): boolean => {
    return (checkWinCondition(gameState).winner === null ? false : true);
}
