import { startGame } from './startGame';

describe("startGame", () => {
    it("initializes the game with the specified array of player objects", () => {
        const players = [
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
        ];
        const gameState = startGame(players);
        expect(gameState.winner).toBe(null);
        expect(gameState.errorMessage).toBe('');
        expect(gameState.isGameOver).toBe(false)
        expect(gameState.gamePhase).toBe(null);
        expect(gameState.announcements).toBe('');
        expect(gameState.votes).toBe(null);
        expect(gameState.actions).toBe(null);
        expect(gameState.players).toStrictEqual([
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
        ]);
    })
})