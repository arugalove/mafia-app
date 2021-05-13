
import React, { ChangeEvent, useState } from "react";

import { JoinPagePure } from "./JoinPagePure";
import { socket } from "../../socketClient";
import { MESSAGE_USER_JOINED } from "../../constants";
import { Faction, Role } from "../App/types";

export type JoinPageProps = {
    playerId: string
}

export const JoinPage = ( { playerId }: JoinPageProps ) => {
    const [ username, setUsername ] = useState<string>("");

    return <JoinPagePure
        username={username}
        onUsernameChange={(e: ChangeEvent<HTMLInputElement> ) => setUsername(e.target.value)}
        onSubmit={(e) => {
            e.preventDefault();
            // const player = {
            //     id: playerId,
            //     username: username,
            // //     };
            // socket.emit(MESSAGE_USER_JOINED, username);
            setUsername("");
        }}
    />
}