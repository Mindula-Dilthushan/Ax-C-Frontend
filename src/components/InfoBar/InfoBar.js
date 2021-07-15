import React from 'react';


import './InfoBar.css';
import exitImage from '../InfoBar/assets/close_window_127px.png';


const InfoBar = ({room}) => (
    <div className="header-Top">
        <h2 className="ChatId"> Ax-C Chat No : {room} </h2>
        <a href="/"> <img className="btnExit" src={exitImage} alt={exitImage}/></a>
    </div>
)

export default InfoBar;