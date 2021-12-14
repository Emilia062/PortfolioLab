import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import HomeHeader from "./HomeHeader";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorsPassword, setErrorsPassword] = useState([]);
    const [errorsEmail, setErrorsEmail] = useState([]);
    const [message, setMessage] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setErrorsPassword("Podane hasło jest za krótkie!")
        }
        if (!email.includes("@")) {
            setErrorsEmail("Podany email jest nieprawidłowy!")
        }
        if(email.includes("@") && password.length >= 6) {
            setMessage("Udało się zalogować")
            setErrorsEmail([])
            setErrorsPassword([])
            setEmail("")
            setPassword("")
        }
    }

    return (
        <>
            <HomeHeader/>
            <div className="panel">
                <h2 className="panel__title">Zaloguj się</h2>
                <img src={decoration} alt={decoration} className="panel__decoration"/>
                <form className="panel__form" onSubmit={handleSubmit}>
                    <div className="panel__inputs">
                        <label htmlFor="email" className="panel__label">Email</label>
                        <input type="email" id="email" className="panel__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        <div className="contact__errors">{errorsEmail}</div>
                        <label htmlFor="password" className="panel__label">Hasło</label>
                        <input type="password" id="password" className="panel__input" value={password} onChange={e => setPassword(e.target.value)}/>
                        <div className="contact__errors">{errorsPassword}</div>
                        <div>{message}</div>
                    </div>
                    <div className="panel__buttons">
                        <Link to="/rejestracja" className="panel__account">Załóż konto</Link>
                        <button className="panel__btn" >Zaloguj się</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;