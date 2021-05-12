import React, { useState, useEffect } from "react";

import { MessagesPure } from "./MessagesPure";
import { socket } from '../../socketClient';
import { MESSAGE_CHAT } from "../../constants";

export const Messages = () => {
    const [messages, setMessages] = useState<string[]>([]);

    // When this component mounts, start listening for chat messages. When it
    // unmounts, tell the socket.io client to stop listening for chats.
    useEffect(() => {
        socket.on(MESSAGE_CHAT, (data) => setMessages([ ...messages, data ]));
        return () => { socket.off(MESSAGE_CHAT); }
    }, [messages]);

    return <MessagesPure messages={messages} />
}
