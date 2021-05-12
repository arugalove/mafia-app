/**
 * These functions help us persist the game state to Redis according to the
 * game ID.
 *
 * This is necessary because when a client sends a message to the server, it
 * represents an idempotent action that updates the existing game state, which
 * is shared by all the clients (players); if we didn't do this, clients would
 * have to pass the entire game state object with every message to the server,
 * much like a REST PUT request.
 */
const redis = require("redis");
const client = redis.createClient();

export const set = (gameState) => {
    return client.set(gameState.id, JSON.stringify(gameState))
}

export const get = (gameState) => {
    return client.get(gameState.id)
}
