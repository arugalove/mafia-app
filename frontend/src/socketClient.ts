import socketIOClient from "socket.io-client";
import { SOCKET_IO_SERVER } from "./constants";

export const socket = socketIOClient(SOCKET_IO_SERVER);
