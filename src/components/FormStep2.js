import React from 'react';

const FormStep2 = ({handleStep3}) => {
    return (
        <>
            <div className="form__info">
                <h3 className="form__important">Ważne!</h3>
                <p className="step1__important">Wszystkie rzeczy do oddania zapakuj w 60l worki.
                    Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className="form__background">
                <form className="form__form">
                    <p className="form__step">Krok 2/4</p>
                    <h3 className="form__subtitle">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                    <div className="form__holder">
                        <select>
                            <div className="custom-select" style="width:200px;">
                                <select>
                                    <option value="0">Select car:</option>
                                    <option value="1">Audi</option>
                                    <option value="2">BMW</option>
                                    <option value="3">Citroen</option>
                                    <option value="4">Ford</option>
                                    <option value="5">Honda</option>
                                    <option value="6">Jaguar</option>
                                    <option value="7">Land Rover</option>
                                    <option value="8">Mercedes</option>
                                    <option value="9">Mini</option>
                                    <option value="10">Nissan</option>
                                    <option value="11">Toyota</option>
                                    <option value="12">Volvo</option>
                                </select>
                            </div>
                        </select>
                    </div>
                    <button className="form__button">Wstecz</button>
                    <button className="form__button" onClick={handleStep3}>Dalej</button>
                </form>
            </div>
        </>
    );
};

export default FormStep2;