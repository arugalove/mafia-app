import React, { ChangeEvent, useState } from "react";

import { FormPure } from "./FormPure";
import { socket } from "../../socketClient";
import { MESSAGE_CHAT, MESSAGE_USER_JOINED } from "../../constants";

export const Form = () => {
    const [ message, setMessage ] = useState<string>("");

    return <FormPure
        message={message}
        onMessageChange={(e: ChangeEvent<HTMLInputElement> ) => setMessage(e.target.value)}
        onSubmit={(e) => {
            e.preventDefault();
            socket.emit(MESSAGE_CHAT, message);
            setMessage("");
        }}
    />
}
