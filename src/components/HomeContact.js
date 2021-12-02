import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [errorsName, setErrorsName] = useState([]);
    const [errorsEmail, setErrorsEmail] = useState([]);
    const [errorsMsg, setErrorsMsg] = useState([]);

    const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name.includes(" ") === true){
            setErrorsName("Podane imię jest nieprawidłowe!")
        }
        if(!validateEmail(email)){
            setErrorsEmail("Podany email jest nieprawidłowy!")
        }
        if(msg.length < 120){
            setErrorsMsg("Wiadomość musi mieć przynajmniej 120 znaków!")
        }

        if(msg.length >= 120 && validateEmail(email) && name.includes(" ") === false) {
            const data = {
                name,
                email,
                msg
            }
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Status Code: 200","success :",data);
                    setErrorsMsg([]);
                    setErrorsEmail([]);
                    setErrorsName([]);
                })
                .catch(error => {
                    console.log("Status code: 400",error);
                });
        }
        setName("");
        setEmail("");
        setMsg("");
    }

    return (
        <div id="homeContact">
            <div className="contact">
                <div className="contact__text">
                    <h2 className="contact__title">Skontaktuj się z nami</h2>
                    <img src={decoration} alt={decoration} className="contact__decoration"/>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__inputs">
                        <div className="contact__area">
                            <label htmlFor={"name"} className="contact__label">Wpisz swoje imię</label>
                            <input type="name" id="name" className="contact__input" value={name} onChange={e => setName(e.target.value)}
                            style={errorsName.length === 0 ? {borderBottom:"1px solid #707070"} : {borderBottom:"1px solid red"} }/>
                            <div className="contact__errors">{errorsName}</div>
                        </div>
                        <div className="contact__area">
                            <label htmlFor={"email"} className="contact__label">Wpisz swój email</label>
                            <input type="email" id="email" className="contact__input" value={email} onChange={e => setEmail(e.target.value)}
                                   style={errorsEmail.length === 0 ? {borderBottom:"1px solid #707070"} : {borderBottom:"1px solid red"} }/>
                            <div className="contact__errors">{errorsEmail}</div>
                        </div>
                    </div>
                    <div className="contact__area">
                        <label htmlFor="textarea" className="contact__label">Wpisz swoją wiadomość</label>
                        <textarea id="textarea" className="contact__textarea" value={msg} onChange={e => setMsg(e.target.value)}
                                  style={errorsMsg.length === 0 ? {borderBottom:"1px solid #707070"} : {borderBottom:"1px solid red"} }/>
                        <div className="contact__errors">{errorsMsg}</div>
                    </div>
                    <button className="contact__btn">Wyślij</button>
                </form>
            </div>
                <div className="contact__footer">
                    <p className="contact__footer--copyright">Copyright by Coders Lab</p>
                    <div className="contact__footer--icons">
                        <img src={facebook} alt={"facebook"} className="contact__footer--facebook"/>
                        <img src={instagram} alt={"instagram"} className="contact__footer--instagram"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;