import React from 'react';
import decoration from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

const HomeContact = () => {
    return (
        <div id={"homeContact"}>
            <div className={"contact"}>
            <div className={"contact__text"}>
                <h2 className={"contact__title"}>Skontaktuj się z nami</h2>
                <img src={decoration} alt={decoration} className={"contact__decoration"}/>
            <form className={"contact__form"}>
                <div className={"contact__inputs"}>
                    <div className={"contact__area"}>
                        <label htmlFor={"name"} className={"contact__label"}>Wpisz swoje imię</label>
                        <input type="name" id="name" placeholder={"Krzysztof"} className={"contact__input"}/>
                    </div>
                    <div className={"contact__area"}>
                        <label htmlFor={"email"} className={"contact__label"}>Wpisz swój email</label>
                        <input type="email" id="email" placeholder={"abc@xyz.pl"} className={"contact__input"}/>
                    </div>
                </div>
                <div className={"contact__area"}>
                    <label htmlFor="textarea" className={"contact__label"}>Wpisz swoją wiadomość</label>
                    <textarea id="textarea" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' className={"contact__textarea"}> </textarea>
                </div>
                <button className={"contact__btn"}>Wyślij</button>
            </form>
            </div>
            </div>
            <div className={"contact__footer"}>
                <p className={"contact__footer--copyright"}>Copyright by Coders Lab</p>
                <div className={"contact__footer--icons"}>
                <img src={facebook} alt={"facebook"} className={"contact__footer--facebook"}/>
                <img src={instagram} alt={"instagram"} className={"contact__footer--instagram"}/>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;