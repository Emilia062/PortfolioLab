import React, {useState} from 'react';

const FormStep3 = ({setActiveStep3, setActiveStep2, setActiveStep4, location, setLocation, organization, setOrganization,
                       setWhoHelps}) => {
    const [children, setChildren] = useState(false);
    const [mothers, setMothers] = useState(false);
    const [homelessPeople, setHomelessPeople] = useState(false);
    const [disabledPeople, setDisabledPeople] = useState(false);
    const [theElderly, setTheElderly] = useState(false);
    const [error, setError] = useState("");

    const help = () => {
        if(children) {
            setWhoHelps(prev => [...prev, "dzieciom"])
        }
        if(mothers){
            setWhoHelps(prev => [...prev, "samotnym matkom"])
        }
        if(homelessPeople){
            setWhoHelps(prev => [...prev, "bezdomnym"])
        }
        if(disabledPeople){
            setWhoHelps(prev => [...prev, "niepełnosprawnym"])
        }
        if(theElderly){
            setWhoHelps(prev => [...prev, "osobom starszym"])
        }
    }

    const condition = () => {
        if(children === true || mothers === true || homelessPeople === true || disabledPeople === true || theElderly === true){
            setActiveStep3(false);
            setActiveStep4(true);
        } else {
            setError("Proszę wybrać co najmniej jedną grupę, której chcesz pomóc");
        }
    }

    const handleNext = (e) => {
        e.preventDefault();
        condition();
        help();
    }

    const handlePrev = (e) => {
        e.preventDefault();
        setActiveStep3(false);
        setActiveStep2(true);
    }

    return (
        <>
        <div className="form__info">
            <h3 className="form__important">Ważne!</h3>
            <p className="form__description">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę
                tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        </div>
            <div className="form__background">
                <form className="form__form">
            <p className="form__step">Krok 3/4</p>
            <h3 className="form__subtitle--step2">Lokalizacja:</h3>
            <div className="form__holder">
                <select className="step2__select" value={location} onChange={e => setLocation(e.target.value)}>
                    {/*<option value="0" className="step2__option">- wybierz -</option>*/}
                    <option value="Poznań" className="step2__option">Poznań</option>
                    <option value="Warszawa" className="step2__option">Warszawa</option>
                    <option value="Kraków" className="step2__option">Kraków</option>
                    <option value="Wrocław" className="step2__option">Wrocław</option>
                    <option value="Katowice" className="step2__option">Katowice</option>
                </select>
                <p className="step3__title">Komu chcesz pomóc?</p>
                <ul className="form__holder form__holder--step3">
                    <div>
                        <li className="step3__options">
                            <input type="checkbox" id="children" className="form__checkbox" value="children" checked={children}
                            onClick={() => setChildren(!children)}/>
                            <label htmlFor="children">dzieciom</label>
                        </li>
                        <li className="step3__options">
                            <input type="checkbox" id="mothers" className="form__checkbox" value="mothers" checked={mothers}
                            onClick={() => setMothers(!mothers)}/>
                            <label htmlFor="mothers">samotnym matkom</label>
                        </li>
                        <li className="step3__options">
                            <input type="checkbox" id="homelessPeople" className="form__checkbox" value="homelessPeople" checked={homelessPeople}
                            onClick={() => setHomelessPeople(!homelessPeople)}/>
                            <label htmlFor="homelessPeople">bezdomnym</label>
                        </li>
                    </div>
                    <div>
                        <li className="step3__options">
                            <input type="checkbox" id="disabledPeople" className="form__checkbox" value="disabledPeople" checked={disabledPeople}
                            onClick={() => setDisabledPeople(!disabledPeople)}/>
                            <label htmlFor="disabledPeople">niepełnosprawnym</label>
                        </li>
                        <li className="step3__options">
                            <input type="checkbox" id="theElderly" className="form__checkbox" value="theElderly" checked={theElderly}
                            onClick={() => setTheElderly(!theElderly)}/>
                            <label htmlFor="theElderly">osobom starszym</label>
                        </li>
                    </div>
                </ul>
                <div>
                    <p className="step3__title">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                    <textarea className="step3__textarea" value={organization} onChange={e => setOrganization(e.target.value)}> </textarea>
                </div>
            </div>
                    <div className="form__error">{error}</div>
            <button className="form__button" onClick={handlePrev} >Wstecz</button>
            <button className="form__button" onClick={handleNext}>Dalej</button>
        </form>
    </div>
</>
    );
};

export default FormStep3;