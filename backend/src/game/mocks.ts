import { GameState, Faction, Role, ActionType, Player, Action } from './types';

export const mockPlayers: Player[] = [
    {
        id: 1,
        username: "Mary Beth",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 2,
        username: "Alexander",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 3,
        username: "Jo",
        faction: Faction.Village,
        alive: true,
        role: Role.Doctor,
        vote: null,
        action: ActionType.PROTECT,
        announcements: []
    },
    {
        id: 4,
        username: "Mell",
        faction: Faction.Village,
        alive: true,
        role: Role.Cop,
        vote: null,
        action: ActionType.INSPECT,
        announcements: []
    },
    {
        id: 5,
        username: "Ahmed",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 6,
        username: "Damon",
        faction: Faction.Mafia,
        alive: true,
        role: Role.Mafioso,
        vote: null,
        action: ActionType.KILL,
        announcements: []
    },
    {
        id: 7,
        username: "Kelsey",
        faction: Faction.Mafia,
        alive: true,
        role: Role.Mafioso,
        vote: null,
        action: null,
        announcements: []
    }
]

export const mockGameState: GameState = {
    // create a mock game state of a game in progress
    // use spread notation and modify specific fields when necessary
    id: 1,
    isPlaying: true,
    winner: null,
    errorMessage: '',
    gamePhase: null,
    announcements: [], 
    actions: {},
    players: mockPlayers
}

export const secretPlayer: Player = {
    id: 8,
    username: "Steven",
    faction: Faction.Village,
    alive: true,
    role: Role.Villager,
    vote: null,
    action: null,
    announcements: []
}

export const mockAction: Action = {
    playerId: 3,
    actionType: ActionType.PROTECT
}

export const mockActions: { [target: number]: Action[] } = {
    1: [
        {
            playerId: 6,
            actionType: ActionType.KILL
        },
        {
            playerId: 3,
            actionType: ActionType.PROTECT
        }
    ],
    7: [
        {
            playerId: 4,
            actionType: ActionType.INSPECT
        }
    ]
}

export const mockVotingMajority: Player[] = [
    {
        id: 1,
        username: "Mary Beth",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: 5,
        action: null,
        announcements: []
    },
    {
        id: 2,
        username: "Alexander",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: 5,
        action: null,
        announcements: []
    },
    {
        id: 3,
        username: "Jo",
        faction: Faction.Village,
        alive: true,
        role: Role.Doctor,
        vote: 5,
        action: null,
        announcements: []
    },
    {
        id: 4,
        username: "Mell",
        faction: Faction.Village,
        alive: true,
        role: Role.Cop,
        vote: 5,
        action: null,
        announcements: []
    },
    {
        id: 5,
        username: "Ahmed",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 6,
        username: "Damon",
        faction: Faction.Mafia,
        alive: true,
        role: Role.Mafioso,
        vote: null,
        action: ActionType.KILL,
        announcements: []
    },
    {
        id: 7,
        username: "Kelsey",
        faction: Faction.Mafia,
        alive: true,
        role: Role.Mafioso,
        vote: null,
        action: null,
        announcements: []
    }
]

export const mockPlayersAfterExecution: Player[] = [
    {
        id: 1,
        username: "Mary Beth",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 2,
        username: "Alexander",
        faction: Faction.Village,
        alive: true,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 3,
        username: "Jo",
        faction: Faction.Village,
        alive: true,
        role: Role.Doctor,
        vote: null,
        action: ActionType.PROTECT,
        announcements: []
    },
    {
        id: 4,
        username: "Mell",
        faction: Faction.Village,
        alive: true,
        role: Role.Cop,
        vote: null,
        action: ActionType.INSPECT,
        announcements: []
    },
    {
        id: 5,
        username: "Ahmed",
        faction: Faction.Village,
        alive: false,
        role: Role.Villager,
        vote: null,
        action: null,
        announcements: []
    },
    {
        id: 6,
        username: "Damon",
        faction: Faction.Mafia,
        alive: true,
        role: Role.Mafioso,
        vote: null,
        action: ActionType.KILL,
        announcements: []
    },
    {
        id: 7,
        username: "Kelsey",
        faction: Faction.Mafia,
        alive: true,
        role: Role.Mafioso,
        vote: null,
        action: null,
        announcements: []
    }
]

export const mockPlayer: Player = {
    id: 2,
    username: "Alexander",
    faction: Faction.Village,
    alive: true,
    role: Role.Villager,
    vote: null,
    action: null,
    announcements: []
}