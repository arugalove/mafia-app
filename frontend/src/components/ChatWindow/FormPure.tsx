import { ChangeEvent, FormEvent } from "react";

export type FormPureProps = {
    message: string;
    onMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const FormPure = ({ onSubmit, onMessageChange, message }: FormPureProps) => (
    <form onSubmit={onSubmit}>
            <input id="chat-input" type="text" value={message} onChange={onMessageChange} />
            <button type="submit">Send</button>
    </form>
);
