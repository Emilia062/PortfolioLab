import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {Link, NavLink} from "react-router-dom";
import Home from "./Home";
import {Link as LinkS} from "react-scroll";
import HomeHeader from "./HomeHeader";

const Login = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    return (
        <>
            <div className={"header__nav"}>
                <NavLink activeclassname={"active"} to="/" element={Home} className={"header__nav--link"}>Start</NavLink>
                <LinkS to={"homeFourSteps"} spy={true} smooth={true} className={"header__nav--link"}>O co chodzi?</LinkS>
                <LinkS to={"homeAboutUs"} spy={true} smooth={true} className={"header__nav--link"}>O nas</LinkS>
                <LinkS to={"homeWhoWeHelp"} spy={true} smooth={true} className={"header__nav--link"}>Fundacja i Organizacje</LinkS>
                <LinkS to={"homeContact"} spy={true} smooth={true} className={"header__nav--link"}>Kontakt</LinkS>
            </div>
            <div className={"login"}>
                <h2 className={"login__title"}>Zaloguj się</h2>
                <img src={decoration} alt={decoration} className={"login__decoration"}/>
                <form className={"login__form"}>
                    <div className={"login__inputs"}>
                        <label htmlFor={"name"} className={"login__label"}>Email</label>
                        <input type="name" id="name" className={"login__input"} value={name} onChange={e => setName(e.target.value)}/>
                        <label htmlFor={"password"} className={"login__label"}>Hasło</label>
                        <input type="password" id="password" className={"login__input"} value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className={"login__buttons"}>
                        <Link to="/rejestracja" component={HomeHeader} className={"login__account"}>Załóż konto</Link>
                        <button className={"login__btn"}>Zaloguj się</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;