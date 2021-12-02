import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import Registration from "./Registration";

const Login = ({handleActiveRegistration}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorsPassword, setErrorsPassword] = useState([]);
    const [errorsEmail, setErrorsEmail] = useState([]);

    // const validateEmail = (email) => {
    //     return email.match(
    //         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     );
    // };
    //
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     if(password.length < 6){
    //         setErrorsPassword("Podane hasło jest za krótkie!")
    //     }
    // }
    //     if(!validateEmail(email)){
    //         setErrorsEmail("Podany email jest nieprawidłowy!")
    //     }

    // element={Registration}

    return (
        <>
            <div className="panel">
                <h2 className="panel__title">Zaloguj się</h2>
                <img src={decoration} alt={decoration} className="panel__decoration"/>
                <form className="panel__form">
                    <div className="panel__inputs">
                        <label htmlFor="email" className="panel__label">Email</label>
                        <input type="email" id="email" className="panel__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        <div className="contact__errors">{errorsEmail}</div>
                        <label htmlFor="password" className="panel__label">Hasło</label>
                        <input type="password" id="password" className="panel__input" value={password} onChange={e => setPassword(e.target.value)}/>
                        <div className="contact__errors">{errorsPassword}</div>
                    </div>
                    <div className="panel__buttons">
                        <Link to="/rejestracja" className="panel__account" onClick={handleActiveRegistration}>Załóż konto</Link>
                        <button className="panel__btn" >Zaloguj się</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;