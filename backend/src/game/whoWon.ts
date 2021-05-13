import { Faction, GameState } from "./types";

export const whoWon = (gameState: GameState): Faction | null => {
  return gameState.winner ? gameState.winner : null;
};
