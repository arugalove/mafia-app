import { jest } from '@jest/globals';
import { GameState, Faction, Role } from './types';

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
    players: [
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
            action: null,
            announcements: []
        },
        {
            id: 4,
            username: "Mell",
            faction: Faction.Village,
            alive: true,
            role: Role.Cop,
            vote: null,
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
            action: null,
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
        },
        {
            id: 8,
            username: "Steven",
            faction: Faction.Village,
            alive: true,
            role: Role.Villager,
            vote: null,
            action: null,
            announcements: []
        },
    ]
}