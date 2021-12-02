import React from 'react';
import decoration from "../assets/Decoration.svg";

const LoggingOut = ({handleHome}) => {
    return (
            <div className="loggingOut">
                <h2 className="loggingOut__title">Wylogowanie nastąpiło <div>pomyślnie!</div></h2>
                <img src={decoration} alt={decoration} className="loggingOut__decoration"/>
                <button className="loggingOut__btn" onClick={handleHome}>Strona główna</button>
            </div>
    );
};

export default LoggingOut;