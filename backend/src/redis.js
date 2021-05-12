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
const { promisify } = require("util");
const client = redis.createClient();

const clientGet = promisify(client.get).bind(client);
const clientSet = promisify(client.set).bind(client);

export const createKey = (id) => `gameState_${id}`;

export const set = async (gameState) => {
    return await clientSet(createKey(gameState.id), JSON.stringify(gameState))
}

export const get = async (id) => {
    return await clientGet(createKey(id))
}
