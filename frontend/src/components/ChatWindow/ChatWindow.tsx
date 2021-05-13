import React from "react";

import { Messages } from "./Messages";
import { Form } from "./Form";

import './ChatWindow.css';


export const ChatWindow = () => (
    <>
       <Messages />
       <Form />
    </>
)

        // <div>
        //     <ul id="messages"></ul>
        //     <form id="form" action="">
        //         <input id="input" />
        //         <button>Send</button>
        //     </form>
        // </div>