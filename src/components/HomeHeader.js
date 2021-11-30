import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import img from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import Home from "./Home";
import Login from "./Login";

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
                <div className={"header__titles"}>
                    <h1 className={"header__title"}>Zacznij pomagać!</h1>
                    <h1 className={"header__title"}>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={decoration} alt={decoration} className={"header__decoration"}/>
                </div>
                <div className={"header__btns"}>
                    <button className={"header__btn"}>
                        <Link to="/logowanie" className={"header__btn--link"}><div>ODDAJ</div><div>RZECZY</div></Link>
                    </button>
                    <button className={"header__btn"}>
                        <Link to="/logowanie" className={"header__btn--link"}><div>ZORGANIZUJ</div><div>ZBIÓRKĘ</div></Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;