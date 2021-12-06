import React from 'react';

const FormStep1 = ({handleStep2}) => {
    return (
        <>
            <div className="form__info">
                <h3 className="form__important">Ważne!</h3>
                <p className="step1__important">Uzupełnij szczegóły dotyczące Twoich rzeczy.
                    Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <div className="form__background">
                <form className="form__form">
                    <p className="form__step">Krok 1/4</p>
                    <h3 className="form__subtitle">Zaznacz co chcesz oddać:</h3>
                        <div className="form__holder">
                            <div className="form__option">
                                <input type="radio" id="clothes" className="form__radio--input" value="clothes" />
                                <label htmlFor="clothes" className="form__radio--label">ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="clothesBadCondition" className="form__radio--input" value="clothesBadCondition" />
                                <label htmlFor="clothesBadCondition" className="form__radio--label">ubrania, do wyrzucenia</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="toys" className="form__radio--input" value="toys"/>
                                <label htmlFor="toys" className="form__radio--label">zabawki</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="books" className="form__radio--input" value="books" />
                                <label htmlFor="books" className="form__radio--label">książki</label>
                            </div>
                            <div className="form__option">
                                <input type="radio" id="others" className="form__radio--input" value="others" />
                                <label htmlFor="others" className="form__radio--label">inne</label>
                            </div>
                        </div>
                    <button className="form__button" onClick={handleStep2}>Dalej</button>
                </form>
            </div>
        </>
    );
};

export default FormStep1;