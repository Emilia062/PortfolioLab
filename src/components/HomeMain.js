import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

function HomeMain() {
    return (
        <div className="header__main">
            <div className="header__img"/>
            <div className="header__container">
                <div className="header__titles">
                    <h1 className="header__title">Zacznij pomagać!</h1>
                    <h1 className="header__title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={decoration} alt={decoration} className="header__decoration"/>
                </div>
                <div className="header__btns">
                    <button className="header__btn">
                        <Link to="/logowanie" className="header__btn--link"><div>ODDAJ</div><div>RZECZY</div></Link>
                    </button>
                    <button className="header__btn">
                        <Link to="/logowanie" className="header__btn--link"><div>ZORGANIZUJ</div><div>ZBIÓRKĘ</div></Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeMain;