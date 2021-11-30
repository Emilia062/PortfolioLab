import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import img from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import Home from "./Home";
import Login from "./Login";
import HomeMain from "./HomeMain";

function HomeHeader() {
    const [isActiveLogin, setIsActiveLogin] = useState(false);

    const handleActiveLogin = () => {
        setIsActiveLogin(true);
    }

    return (
        <div className={"header"}>
            <div className={"header__img"}/>
            <div className={"header__text"}>
                <div className={"header__links"}>
                    <Link to="/logowanie" element={Login} className={"header__links--login"} onClick={handleActiveLogin}>Zaloguj się</Link>
                    <Link to="/rejestracja" component={HomeHeader} className={"header__links--register"}>Zarejestruj się</Link>
                </div>
                {isActiveLogin === true && (
                    <Login/>
                    )}
                <div className={"header__nav"}>
                    <NavLink activeclassname={"active"} to="/" element={Home} className={"header__nav--link"}>Start</NavLink>
                    <LinkS to={"homeFourSteps"} spy={true} smooth={true} className={"header__nav--link"}>O co chodzi?</LinkS>
                    <LinkS to={"homeAboutUs"} spy={true} smooth={true} className={"header__nav--link"}>O nas</LinkS>
                    <LinkS to={"homeWhoWeHelp"} spy={true} smooth={true} className={"header__nav--link"}>Fundacja i Organizacje</LinkS>
                    <LinkS to={"homeContact"} spy={true} smooth={true} className={"header__nav--link"}>Kontakt</LinkS>
                </div>
                <HomeMain/>
            </div>
        </div>
    );
}

export default HomeHeader;