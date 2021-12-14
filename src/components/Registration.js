import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import HomeHeader from "./HomeHeader";

const Registration = ({handleActiveLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errorsPassword, setErrorsPassword] = useState([]);
    const [errorsEmail, setErrorsEmail] = useState([]);
    const [message, setMessage] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 6 && password2.length < 6) {
            setErrorsPassword(prev => [...prev, "Podane hasło jest za krótkie!"])
        }
        if (!email.includes("@")) {
            setErrorsEmail("Podany email jest nieprawidłowy!")
        }
        if(password !== password2){
            setErrorsPassword(prev => [...prev, "Hasło nie są identyczne!"])
        }
        if(email.includes("@") && password.length >= 6) {
            setMessage("Udało się zalogować")
            setErrorsEmail([])
            setErrorsPassword([])
            setEmail("")
            setPassword("")
            setPassword2("")
        }
    }

    return (
        <>
            <HomeHeader/>
            <div className="panel">
                <h2 className="panel__title">Załóż konto</h2>
                <img src={decoration} alt={decoration} className="panel__decoration"/>
                <form className="panel__form" onSubmit={handleSubmit}>
                    <div className="panel__inputs">
                        <label htmlFor="email" className="panel__label">Email</label>
                        <input type="email" id="email" className="panel__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        <div className="contact__errors">{errorsEmail}</div>
                        <label htmlFor="password" className="panel__label">Hasło</label>
                        <input type="password" id="password" className="panel__input" value={password} onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="password2" className="panel__label">Powtórz hasło</label>
                        <input type="password" id="password2" className="panel__input" value={password2} onChange={e => setPassword2(e.target.value)}/>
                        {errorsPassword.map((error) => {
                            return (<div className="contact__errors">{error}</div>)
                        })}
                        <div>{message}</div>
                    </div>
                    <div className="panel__buttons">
                        <Link to="/logowanie" className="panel__login" onClick={handleActiveLogin}>Zaloguj się</Link>
                        <button className="panel__btn">Załóż konto</button>
                    </div>
                </form>
            </div>
            
        </>
    );
};

export default Registration;