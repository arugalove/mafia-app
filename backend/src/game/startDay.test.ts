import { startDay } from './startDay';

describe("startDay", () => {
    it("takes the game state from the previous Night and returns a new state for the current Day", () => {
        let gameState = {
            winner: null,
            errorMessage: '',
            isGameOver: false,
            gamePhase: null,
            announcements: '', 
            votes: null, 
            actions: null,
            players: [
                {
                    id: 1,
                    username: "Mary Beth",
                    faction: "Village",
                    alive: true,
                    role: "Villager",
                    vote: null,
                    action: null
                },
                {
                    id: 2,
                    username: "Alexander",
                    faction: "Village",
                    alive: true,
                    role: "Villager",
                    vote: null,
                    action: null
                },
                {
                    id: 3,
                    username: "Jo",
                    faction: "Village",
                    alive: true,
                    role: "Doctor",
                    vote: null,
                    action: null
                },
                {
                    id: 4,
                    username: "Mell",
                    faction: "Village",
                    alive: true,
                    role: "Cop",
                    vote: null,
                    action: null
                },
                {
                    id: 5,
                    username: "Ahmed",
                    faction: "Village",
                    alive: true,
                    role: "Villager",
                    vote: null,
                    action: null
                },
                {
                    id: 6,
                    username: "Damon",
                    faction: "Mafia",
                    alive: true,
                    role: "Mafioso",
                    vote: null,
                    action: null
                },
                {
                    id: 7,
                    username: "Kelsey",
                    faction: "Mafia",
                    alive: true,
                    role: "Mafioso",
                    vote: null,
                    action: null
                },
                {
                    id: 8,
                    username: "Steven",
                    faction: "Village",
                    alive: true,
                    role: "Villager",
                    vote: null,
                    action: null
                },
            ]
        };
        gameState = startDay(gameState);
        expect(gameState.gamePhase).toBe("Day");
    })
})