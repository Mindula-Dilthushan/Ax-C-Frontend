import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.png';
import loginImage from './assets/Image.jpg';

import './Join.css';

 const Join = () => {
     const [name, setName] = useState('');
     const [room, setRoom] = useState('');

    return (
     <div className={"MainHeader"}>
         {/*=============== Left Side Pane ==================*/}
         <div className={"LeftPane"}>
             <div className={"leftMiniPane"}>
                 <div>
                     <img src={loginImage} className="LoginImage" alt={loginImage}/>
                 </div>
             </div>
         </div>
         {/*=============== Right Side Pane ==================*/}
         <div className={"RightPane"}>
             <div className={"rightMiniPane"}>
                 <img src={logo} alt="Logo" className="Logo"/>
                 <div>
                     <input placeholder="User Name" className="inputUserName" type="text"
                            onChange={(event) =>
                                setName(event.target.value)
                            }/>
                 </div>
                 <div>
                     <input placeholder="Chat ID" className="inputChatId" type="text"
                            onChange={(event) =>
                                setRoom(event.target.value)
                            }/>
                 </div>

                 <Link onClick={(event) => (!name || !room ? event.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
                     <button className="button mt-20" type="submit">Sign In</button>
                 </Link>

             </div>
         </div>
     </div>
    )
 }

 export default Join;