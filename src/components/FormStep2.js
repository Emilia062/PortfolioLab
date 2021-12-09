import React from 'react';

const FormStep2 = ({setActiveStep3, setActiveStep1, setActiveStep2, amountOfBags, setAmountOfBags}) => {

    const handleAmountOfBags = (e) => {
        setAmountOfBags(e.target.value)
    }

    const handleNext = (e) => {
        e.preventDefault();
        setActiveStep2(false);
        setActiveStep3(true);
    }

    const handlePrev = (e) => {
        e.preventDefault();
        setActiveStep2(false);
        setActiveStep1(true);
    }

    return (
        <>
            <div className="form__info">
                <h3 className="form__important">Ważne!</h3>
                <p className="form__description">Wszystkie rzeczy do oddania zapakuj w 60l worki.
                    Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className="form__background">
                <form className="form__form">
                    <p className="form__step">Krok 2/4</p>
                    <h3 className="form__subtitle--step2">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                    <div className="step2__holder">
                        <p className="step2__title">Liczba 60l worków:</p>
                        <select className="step2__select" value={amountOfBags} onChange={handleAmountOfBags}>
                            <option value="0" className="step2__option">- wybierz -</option>
                            <option value="1" className="step2__option">1</option>
                            <option value="2" className="step2__option">2</option>
                            <option value="3" className="step2__option">3</option>
                            <option value="4" className="step2__option">4</option>
                            <option value="5" className="step2__option">5</option>
                        </select>
                    </div>
                    <button className="form__button" onClick={handlePrev}>Wstecz</button>
                    <button className="form__button" onClick={handleNext}>Dalej</button>
                </form>
            </div>
        </>
    );
};

export default FormStep2;