export type GameState = {
  winner: Faction | null,
  errorMessage: string,
  gamePhase: GamePhase | null,
  announcements: string[], 
  actions: { [target: number]: Action[] },
  players: Player[]
}
  
export type Player = {
  id: number,
  username: string,
  faction: Faction,
  alive: boolean,
  role: Role,
  vote: number | null, // player.id or null
  action: ActionType | null
  announcements: string[]
}

export type Action = {
  playerId: number,
  actionType: ActionType
}

// actions = {
//   // key is the id of the TARGET player
//   1: [
//       { action: Actions.KILL, playerId: 2 },
//       { action: Actions.PROTECT, playerId: 3 },
//   ]
// }

export enum Faction {
  "Village",
  "Mafia",
}

export enum Role {
  "Villager",
  "Doctor",
  "Cop",
  "Mafioso",
}

export enum ActionType {
  "KILL",
  "INSPECT",
  "PROTECT"
}

export enum GamePhase {
  "Day",
  "Night",
}