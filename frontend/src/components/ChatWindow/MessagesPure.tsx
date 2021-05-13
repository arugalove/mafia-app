import React from "react";

export type ChatPureProps = {
    messages: string[];
}

export const MessagesPure = ({ messages }: ChatPureProps): React.ReactElement => (
    <ol id="messages">
        {messages.map((msg) => (
            <li key={`${msg} ${Date.now()}`}>{msg}</li>
        ))}
    </ol>
)
