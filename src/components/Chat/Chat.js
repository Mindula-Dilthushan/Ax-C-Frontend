import React, {useState, useEffect} from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

//StylesSheets
import './Chat.css';

//Components
import Header from "../Header/Header";
import InputMessage from "../InputMessage/InputMessage";
import MessageArea from "../MessageArea/MessageArea";

let socket;

const Chat = ({location}) => {

    const [username, setUserName] = useState('');
    const [chatId, setChatId] = useState('');
    const [sendMessage, setSendMessage] = useState('');
    const [messageArea, setMessageArea] = useState([]);
    const EXIT = 'localhost:8000';

    useEffect(() => {

        const {username, chatId} = queryString.parse(location.search);

        socket = io(EXIT)

        setUserName(username);
        setChatId(chatId);

        socket.emit('Join', {username, chatId}, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [EXIT, location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessageArea([...messageArea, message]);
        })
    }, [messageArea]);

    const sendToMessage = (event) => {
        event.preventDefault();
        if (sendMessage) {
            socket.emit('SendMessage', sendMessage, () => setSendMessage(''));
        }
    }

    return (
        <div className="ChatMainPane">
            <div className="container">
                <Header chatId={chatId}/>
                <MessageArea messages={messageArea} username={username}/>
                <InputMessage message={sendMessage} setMessage={setSendMessage} sendMessage={sendToMessage}/>
            </div>
        </div>
    )
}

export default Chat;