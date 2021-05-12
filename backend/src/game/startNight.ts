import { GamePhase, GameState } from "./types";

export const startNight = (gameState: GameState): GameState => {
  // do I need to push announcements to clients here?
  return { ...gameState, gamePhase: GamePhase.Night };
};
