import React from "react";

export type ChatPureProps = {
    messages: string[];
}

export const MessagesPure = ({ messages }: ChatPureProps): React.ReactElement => (
    <ol id="messages">
        {messages.map((msg) => (
            <li key={`${msg} ${Date.now()}`}>
                <p>{msg}</p>
                <p><b>Steven</b> <i>{`${Date.now()}`}</i></p>
            </li>
        ))}
    </ol>
)
