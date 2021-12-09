import React from 'react';

const FormStep4 = ({street, setStreet, city, setCity, postCode, setPostCode, phone, setPhone, date, setDate,
time, setTime, notes, setNotes, setActiveStep3, setActiveStep4, setSummary}) => {

    const handlePrev = (e) => {
        e.preventDefault();
        setActiveStep4(false);
        setActiveStep3(true);
    }

    const handleNext = (e) => {
        e.preventDefault();
        setActiveStep4(false);
        setSummary(true);
    }

    return (
        <>
        <div className="form__info">
            <h3 className="form__important">Ważne!</h3>
            <p className="form__description">Podaj adres oraz termin odbioru rzeczy.</p>
        </div>
    <div className="form__background">
        <form className="form__form">
            <p className="form__step">Krok 4/4</p>
            <h3 className="form__subtitle">Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
            <div className="step4__holder">
                <ul className="form__column">
                    <h4 className="form__column--title">Adres odbioru:</h4>
                    <li className="step4__options">
                        <label className="step4__title" htmlFor="street">Ulica</label>
                        <input type="text" id="street" className="step4__textarea" value={street} onChange={e => setStreet(e.target.value)}/>
                    </li>
                    <li className="step4__options">
                        <label className="step4__title" htmlFor="city">Miasto</label>
                        <input type="text" id="city" className="step4__textarea" value={city} onChange={e => setCity(e.target.value)}/>
                    </li>
                    <li className="step4__options">
                        <label className="step4__title" htmlFor="postCode">Kod <br/>pocztowy</label>
                        <input type="text" id="postCode" className="step4__textarea" value={postCode} onChange={e => setPostCode(e.target.value)}/>
                    </li>
                    <li className="step4__options">
                        <label className="step4__title" htmlFor="tel">Numer <br/>telefonu</label>
                        <input type="number" id="tel" className="step4__textarea" value={phone} onChange={e => setPhone(e.target.value)}/>
                    </li>
                </ul>
                <ul className="form__column">
                    <h4 className="form__column--title">Termin odbioru:</h4>
                    <li className="step4__options">
                        <label className="step4__title" htmlFor="date">Data</label>
                        <input type="date" id="date" className="step4__textarea" value={date} onChange={e => setDate(e.target.value)}/>
                    </li>
                    <li className="step4__options">
                        <label className="step4__title" htmlFor="time">Godzina</label>
                        <input type="time" id="time" className="step4__textarea" value={time} onChange={e => setTime(e.target.value)}/>
                    </li>
                    <li className="step4__options">
                        <label  className="step4__title">Uwagi <br/>dla kuriera</label>
                        <textarea className="step4__textarea--notes" value={notes} onChange={e => setNotes(e.target.value)}> </textarea>
                    </li>
                </ul>
            </div>
            <button className="form__button" onClick={handlePrev}>Wstecz</button>
            <button className="form__button" onClick={handleNext}>Dalej</button>
        </form>
    </div>
</>
    );
};

export default FormStep4;