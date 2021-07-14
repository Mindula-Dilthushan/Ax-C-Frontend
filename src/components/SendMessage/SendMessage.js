//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14

import React from "react";
import ReactEmoji from 'react-emoji';

//StyleSheets
import './SendMessage.css';

const SendMessage = ({
    message: {user,text}, username}) => {

    let sendByUser = false;

    const trimUserName = username.trim().toLowerCase();

    if(user === trimUserName){
        sendByUser = true;
    }

    return(
        sendByUser ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimUserName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyEnd">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )

    )

}
export default SendMessage;