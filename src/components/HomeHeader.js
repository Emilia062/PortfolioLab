import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

function HomeHeader() {

    return (
        <div className="header">
            <div className="header__text">
                <div className="header__links">
                    <Link to="/logowanie"  className="header__links--login" >Zaloguj się</Link>
                    <Link to="/rejestracja" className="header__links--register" >Zarejestruj się</Link>
                </div>
                <div className="header__nav">
                    <NavLink to="/"  activeClassName="active" className="header__nav--link" >Start</NavLink>
                    <LinkS to={"homeFourSteps"} spy={true} smooth={true} className="header__nav--link">O co chodzi?</LinkS>
                    <LinkS to={"homeAboutUs"} spy={true} smooth={true} className="header__nav--link">O nas</LinkS>
                    <LinkS to={"homeWhoWeHelp"} spy={true} smooth={true} className="header__nav--link">Fundacja i Organizacje</LinkS>
                    <LinkS to={"homeContact"} spy={true} smooth={true} className="header__nav--link">Kontakt</LinkS>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;