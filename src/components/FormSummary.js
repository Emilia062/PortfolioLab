import React from 'react';
import tshirt from '../assets/Icon-1.svg';
import recycle from "../assets/Icon-4.svg";

const FormSummary = ({things, amountOfBags, location, street, city, postCode, phoneNumber, date, time, notes, whoHelps,organization,
                         setActiveSummary, setActiveStep4}) => {

    const handlePrev = (e) => {
        e.preventDefault();
        setActiveSummary(false);
        setActiveStep4(true)
    }

    const handleNext = (e) => {
        e.preventDefault();
        const aplication = {
            things,
            amountOfBags,
            location,
            whoHelps,
            organization,
            street,
            city,
            postCode,
            phoneNumber,
            date,
            time,
            notes
        }
        console.log(aplication);

    }

    return (
        <div>
            <div className="form__background">
                <form className="form__form">
                    <h3 className="form__subtitle summary__subtitles">Podsumowanie Twojej darowizny</h3>
                    <div>
                        <h4 className="summary__title">Oddajesz</h4>
                        <span className="summary__box">
                            <img src={tshirt} alt={tshirt}/>
                            <p className="summary__description">{amountOfBags} worki, {things},{whoHelps.map(element => {return <p>{element}</p>})}</p>
                        </span>
                        <span className="summary__box">
                            <img src={recycle} alt={recycle}/>
                            <p className="summary__description">dla lokalizacji: {location}, {organization}</p>
                        </span>
                    </div>
                    <div className="summary__holder">
                        <ul className="form__column">
                            <h4 className="form__column--title">Adres odbioru:</h4>
                            <li className="step4__options">
                                <p className="step4__title">Ulica</p>
                                <p className="step4__title">{street}</p>
                            </li>
                            <li className="step4__options">
                                <p className="step4__title">Miasto</p>
                                <p className="step4__title">{city}</p>
                            </li>
                            <li className="step4__options">
                                <p className="step4__title">Kod <br/>pocztowy</p>
                                <p className="step4__title">{postCode}</p>
                            </li>
                            <li className="step4__options">
                                <p className="step4__title">Numer <br/>telefonu</p>
                                <p className="step4__title">{phoneNumber}</p>
                            </li>
                        </ul>
                        <ul className="form__column">
                            <h4 className="form__column--title">Termin odbioru:</h4>
                            <li className="step4__options">
                                <p className="step4__title">Data</p>
                                <p className="step4__title">{date}</p>
                            </li>
                            <li className="step4__options">
                                <p className="step4__title">Godzina</p>
                                <p className="step4__title">{time}</p>
                            </li>
                            <li className="step4__options">
                                <label  className="step4__title">Uwagi <br/>dla kuriera</label>
                                <p className="step4__title">{notes}</p>
                            </li>
                        </ul>
                    </div>
                    <button className="form__button" onClick={handlePrev}>Wstecz</button>
                    <button className="form__button" onClick={handleNext}>Dalej</button>
                </form>
            </div>
        </div>
    );
};

export default FormSummary;