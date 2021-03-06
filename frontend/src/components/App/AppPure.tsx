import React from "react";
import { ChatWindow } from "../ChatWindow";
import { JoinPage } from "../JoinPage";

import { GameState } from "./types";

export type AppPureProps = {
    gameState: GameState | null;
    currentPlayerId: string;
}

export const AppPure = ({ gameState, currentPlayerId }: AppPureProps): React.ReactElement => (
    // <pre>
    //     {JSON.stringify(gameState, null, 2)}
    //     {currentPlayerId}
    // // </pre>
    <JoinPage playerId={currentPlayerId} />
    // <ChatWindow />
)
