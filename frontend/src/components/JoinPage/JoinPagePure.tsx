import { ChangeEvent, FormEvent } from "react";

export type JoinPagePureProps = {
    username: string;
    onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const JoinPagePure = ({ onSubmit, onUsernameChange, username }: JoinPagePureProps) => (
    <form onSubmit={onSubmit}>
        <p>
            <label htmlFor="chat-input">Username</label>
            <input id="chat-input" type="text" value={username} onChange={onUsernameChange} />
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
);
