import { GamePhase, GameState } from "./types";

export const startDay = (gameState: GameState): GameState => {
  // do I need to push announcements to clients here?
  return { ...gameState, gamePhase: GamePhase.Day };
};
