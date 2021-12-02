import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import Login from "./Login";

const Registration = ({handleActiveLogin}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    // component={Login}

    return (
        <>
            <div className="panel">
                <h2 className="panel__title">Załóż konto</h2>
                <img src={decoration} alt={decoration} className="panel__decoration"/>
                <form className="panel__form">
                    <div className="panel__inputs">
                        <label htmlFor="email" className="panel__label">Email</label>
                        <input type="email" id="email" className="panel__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="password" className="panel__label">Hasło</label>
                        <input type="password" id="password" className="panel__input" value={password} onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="password2" className="panel__label">Powtórz hasło</label>
                        <input type="password" id="password2" className="panel__input" value={password2} onChange={e => setPassword2(e.target.value)}/>
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