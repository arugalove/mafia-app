import { GameState } from "./types";

export const endGame = (gameState: GameState): GameState => {
  if (gameState.winner === null) return gameState;
  return { ...gameState, isPlaying: false };
};
