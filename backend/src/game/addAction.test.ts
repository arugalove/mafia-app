import { addAction } from "./addAction";
import { mockAction, mockGameState } from "./mocks"

describe("addAction", () => {
    it("takes in a game state and action, then returns a new game state", () => {
        const gameState = mockGameState;
        const action = mockAction;
        const target = action.playerId.toString();
        const currentActionArray = gameState.actions.target || [];
        const updatedActions = {
            ...gameState.actions,
            [target]: [...currentActionArray, action]
        };
        const newGameState = {
            ...gameState,
            actions: updatedActions
        }
        expect(addAction(gameState, action)).toStrictEqual(newGameState)
    });
})