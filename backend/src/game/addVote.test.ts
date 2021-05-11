import { addVote } from "./addVote";
import { mockGameState, mockPlayer, mockPlayersAfterVoteAdded } from "./mocks"

describe("addVote", () => {
    it("takes in a game state, player, and target, then returns a new game state", () => {
        const gameState = mockGameState;
        const player = mockPlayer;
        const target = 2;
        const updatedPlayers = mockPlayersAfterVoteAdded;
        const newGameState = { ...gameState, players: updatedPlayers }
        expect(addVote(gameState, player, target)).toStrictEqual(newGameState)
    })
})