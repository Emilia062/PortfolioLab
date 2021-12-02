import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import Login from "./Login";
import HomeMain from "./HomeMain";
import Registration from "./Registration";
import LoggingOut from "./LoggingOut";

function HomeHeader({isActiveRegistration, isActiveLogin, handleHome, handleActiveRegistration, handleActiveLogin}) {


    // element={Login}
    // element={Registration}
    // element={HomeMain}

    return (
        <div className="header">
            <div className="header__img"/>
            <div className="header__text">
                <div className="header__links">
                    <Link to="/logowanie" className="header__links--login" onClick={handleActiveLogin}>Zaloguj się</Link>
                    <Link to="/rejestracja" className="header__links--register"onClick={handleActiveRegistration}>Zarejestruj się</Link>
                </div>
                <div className="header__nav">
                    <NavLink activeclassname="active" to="/" className="header__nav--link" onClick={handleHome}>Start</NavLink>
                    <LinkS to={"homeFourSteps"} spy={true} smooth={true} className="header__nav--link">O co chodzi?</LinkS>
                    <LinkS to={"homeAboutUs"} spy={true} smooth={true} className="header__nav--link">O nas</LinkS>
                    <LinkS to={"homeWhoWeHelp"} spy={true} smooth={true} className="header__nav--link">Fundacja i Organizacje</LinkS>
                    <LinkS to={"homeContact"} spy={true} smooth={true} className="header__nav--link">Kontakt</LinkS>
                </div>
                {/*<LoggingOut handleHome={handleHome}/>*/}
                {isActiveLogin === true && (
                    <Login handleActiveRegistration={handleActiveRegistration}/>
                )}
                {isActiveRegistration === true && (
                    <Registration handleActiveLogin={handleActiveLogin}/>
                )}
                {isActiveLogin === false && isActiveRegistration === false &&(
                    <HomeMain/>
                )}
            </div>
        </div>
    );
}

export default HomeHeader;