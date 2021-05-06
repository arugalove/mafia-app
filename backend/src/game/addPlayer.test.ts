import { addPlayer } from "./addPlayer";
import { mockGameState, mockPlayer, mockPlayers } from "./mocks"

describe("addPlayer", () => {
    it("takes in a game state and a player and returns a new game state with the player added", () => {
        const gameState = mockGameState;
        const players = mockPlayers;
        const newPlayer = mockPlayer;
        const newGameState = { 
            ...mockGameState, 
            players: [
                ...players,
                newPlayer
            ]
        }
        expect(addPlayer(gameState, newPlayer)).toBe(newGameState)
    });
})