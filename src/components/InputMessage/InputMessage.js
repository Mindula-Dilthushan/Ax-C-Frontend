//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14
import React from "react";

//StyleSheets
import './InputMessage.css';

const InputMessage = ({ message, setMessage, sendMessage }) => (
    <form className="InputMessageForm">
        <input
            className="txtInput"
            type="text"
            placeholder="Type something..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />

        <button className="btnSend" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default InputMessage;