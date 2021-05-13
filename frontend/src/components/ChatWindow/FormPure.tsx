import { ChangeEvent, FormEvent } from "react";

export type FormPureProps = {
    message: string;
    onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const FormPure = ({ onSubmit, onMessageChange, message }: FormPureProps) => (
    <form onSubmit={onSubmit}>
        <p>
            <label htmlFor="chat-input">Message</label>
            <input id="chat-input" type="text" value={message} onChange={onMessageChange} />
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
);
