// Socket.io server. To avoid CORS errors in development, the backend is
// proxying port 3000
export const SOCKET_IO_SERVER = "http://localhost:8000";

// Message types
export const MESSAGE_CONNECTED = "connection";
export const MESSAGE_CHAT = "chat message";
export const MESSAGE_GAME_UPDATE = "game update"
