import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import img from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import Home from "./Home";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

function HomeHeader() {
    return (
        <div className={"header"}>
            <img src={img} alt={"staff"} className={"header__img"}/>
            <div className={"header__text"}>
            <BrowserRouter>
                <div className={"header__links"}>
                    <Link to="/logowanie" className={"header__links--login"}>Zaloguj się</Link>
                    <Link to="/rejestracja" className={"header__links--register"}>Zarejestruj się</Link>
                </div>
            </BrowserRouter>
                <div className={"header__nav"}>
                    <LinkS to="home" spy={true} smooth={true} className={"header__nav--link"}>Start</LinkS>
                    <LinkS to={"homeFourSteps"} spy={true} smooth={true} className={"header__nav--link"}>O co chodzi?</LinkS>
                    <LinkS to="homeAboutUs" spy={true} smooth={true} className={"header__nav--link"}>O nas</LinkS>
                    <LinkS to="homeWhoWeHelp" spy={true} smooth={true} className={"header__nav--link"}>Fundacja i Organizacje</LinkS>
                    <LinkS to="homeContact" spy={true} smooth={true} className={"header__nav--link"}>Kontakt</LinkS>
                </div>
                <div className={"header__titles"}>
                    <h1 className={"header__title"}>Zacznij pomagać!</h1>
                    <h1 className={"header__title"}>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={decoration} alt={decoration} className={"header__decoration"}/>
                </div>
            <BrowserRouter>
                <div className={"header__btns"}>
                    <button className={"header__btn"}>
                        <Link to="/logowanie" className={"header__btn--link"}><div>ODDAJ</div><div>RZECZY</div></Link>
                    </button>
                    <button className={"header__btn"}>
                        <Link to="/logowanie" className={"header__btn--link"}><div>ZORGANIZUJ</div><div>ZBIÓRKĘ</div></Link>
                    </button>
                </div>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default HomeHeader;