//Alpha X Software Company
//Mindula Dilthushan
//Ax-C v1.0.0
//21-07-14
import React from "react";

//Images
import exitImage from '../Header/assets/close_window_127px.png';

//StyleSheets
import './Header.css';

const Header = ({chatId}) => (
    <div className="header-Top">
        <h2 className="ChatId"> {chatId} </h2>
        <a href="/"> <img className="btnExit" src={exitImage} alt={exitImage}/></a>
    </div>
)
export default Header;