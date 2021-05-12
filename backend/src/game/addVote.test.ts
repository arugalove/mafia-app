import { addVote } from "./addVote";
import { mockGameState } from "./mocks"

describe("addVote", () => {
    it("takes in a game state, player, and target, then returns a new game state", () => {
        const gameState = mockGameState;
        const player = gameState.players[1];
        const target = 1;
        const newGameState = { 
            ...gameState, 
            players: [
                ...gameState.players.slice(0, gameState.players.indexOf(player)),
                { ...player, vote: target },
                ...gameState.players.slice(gameState.players.indexOf(player) + 1)
            ]
        };
        // expect(JSON.stringify(addVote(gameState, player, target))).toBe(JSON.stringify(newGameState))
        expect(addVote(gameState, player, target)).toStrictEqual(newGameState)
    })
})