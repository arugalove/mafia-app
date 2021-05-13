import { GameState } from "./types";

export const startGame = (gameState: GameState): GameState => {
  return { ...gameState, isPlaying: true };
};
