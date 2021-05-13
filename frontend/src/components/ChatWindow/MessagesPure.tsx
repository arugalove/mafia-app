import React from "react";

export type ChatPureProps = {
    messages: string[];
}

export const MessagesPure = ({ messages }: ChatPureProps): React.ReactElement => (
    <ol>
        {messages.map((msg) => (
            <li key={`${msg} ${Date.now()}`}>{msg}</li>
        ))}
    </ol>
)
