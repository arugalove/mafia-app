import e from 'cors'; // why did I declare this here?
import { GameState } from './types';

export const votes = (gameState: GameState): (number | null)[] => {
    const votes = gameState.players.map(player => player.vote);
    return votes
}

export const tally = (votes: (number | null)[]): Map<number, number> => {
    const tally: Map<number, number> = new Map();
    votes.forEach(vote => {
        if (vote) {
            const voteCount = tally.get(vote) || 0;
            tally.set(vote, voteCount + 1);
        }
    })
    return tally 
}

export const checkMajority = (gameState: GameState): boolean => {
    const numAlive = gameState.players.filter(player => player.alive === true).length;
    const majority = Math.ceil(numAlive / 2);
    let checkMajority: boolean = false;
    tally(votes(gameState)).forEach(candidate => {
        if (candidate >= majority) checkMajority = true;
    })
    return checkMajority
}