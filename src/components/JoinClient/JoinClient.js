//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14
import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from './assets/Logo.png';
//StyleSheet
import './JoinClient.css';
import {Img} from "react-image";

const JoinClient = () => {

    const [username, setUserName] = useState('');
    const [chatId, setChatId] = useState('');

    return (
        <div className={"MainHeader"}>


            {/*=============== Left Side Pane ==================*/}
            <div className={"LeftPane"}>
                <div className={"leftMiniPane"}>
                    {/*<h1 className={"titleName"}> Ax - C </h1>*/}

                    <img src={logo} alt="Logo" className="Logo"/>

                    <div>
                        <input placeholder="User Name" className="inputUserName" type="text"
                               onChange={(event )=>
                                   setUserName(event.target.value)
                               }/>
                    </div>

                    <div>
                        <input placeholder="Chat ID" className="inputChatId" type="text"
                               onChange={(event )=>
                                   setChatId(event.target.value)
                               }/>
                    </div>

                    <Link onClick={(event) => (!username || !chatId ? event.preventDefault() : null)} to={`/chat?username=${username}&chatId=${chatId}`}>
                        <button className="button mt-20" type="submit">Sign In</button>
                    </Link>

                </div>
            </div>

            {/*=============== Right Side Pane ==================*/}
            <div className={"RightPane"}>
                <div className={"rightMiniPane"}>


                </div>
            </div>
        </div>
    )
}
export default JoinClient;