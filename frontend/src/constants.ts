// Socket.io server. To avoid CORS errors in development, the backend is
// proxying port 3000
export const SOCKET_IO_SERVER = "http://flatiron-mafia.herokuapp.com";

// Message types
export const MESSAGE_CONNECTED = "connection";
export const MESSAGE_CHAT = "chat message";
export const MESSAGE_GAME_UPDATE = "game update";
export const MESSAGE_USER_JOINED = "user joined" // testing
