import { executePlayer } from "./executePlayer";
import { mockGameState, mockPlayers, mockPlayersAfterExecution } from "./mocks"

describe("executePlayer", () => {
    it("returns a new game state in which that player is dead", () => {
        const gameState = mockGameState;
        const player = mockPlayers[4];
        const updatedPlayers = mockPlayersAfterExecution;
        const newGameState = { ...mockGameState, players: updatedPlayers };
        expect(executePlayer(gameState, player)).toStrictEqual(newGameState)
    })
})