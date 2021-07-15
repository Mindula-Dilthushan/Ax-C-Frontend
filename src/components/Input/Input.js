import React from 'react';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="InputMessageForm">
        <input 
            className="txtInput"
            type="text"
            placeholder="Type a message......"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="btnSend" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input;
