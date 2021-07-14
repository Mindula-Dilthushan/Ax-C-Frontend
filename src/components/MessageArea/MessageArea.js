//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14

import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

//StyleSheets
import './MessageArea.css';

//Components
import SendMessage from "../SendMessage/SendMessage";


const MessageArea = ({messages, username}) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) =>
            <div key={i}>
                <SendMessage message={message} name={username}/>
            </div>)}
    </ScrollToBottom>
)

export default MessageArea;