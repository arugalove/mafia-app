const redis = require("redis");
const client = redis.createClient();

export const set = (gameState) => {
    return client.set(gameState.id, JSON.stringify(gameState))
}

export const get = (gameState) => {
    return client.get(gameState.id)
}