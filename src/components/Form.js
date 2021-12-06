import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import decoration from "../assets/Decoration.svg";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";

const Form = () => {
    const [activeStep1, setActiveStep1] = useState(true);
    const [activeStep2, setActiveStep2] = useState(false);
    const [activeStep3, setActiveStep3] = useState(false);
    const [activeStep4, setActiveStep4] = useState(false);

    const handleStep1 = () => {
        setActiveStep1(true);
        setActiveStep2(false);
    }

    const handleStep2 = () => {
        setActiveStep3(false);
        setActiveStep2(true);
        setActiveStep1(false);
    }

    const handleStep3 = () => {
        setActiveStep4(false);
        setActiveStep3(true);
        setActiveStep2(false);
    }

    const  handleStep4 = () => {
        setActiveStep4(true);
        setActiveStep3(false);
    }


    return (
        <>
            <HomeHeader/>
            <div className="form__container">
                <div className="form__img"/>
                <div className="form__content">
                    <div className="form__titles">
                        <h2 className="form__title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                        <img src={decoration} alt={decoration} className="form__decoration"/>
                        <h3 className="form__steps">Wystarczą 4 proste kroki:</h3>
                    </div>
                    <div className="form__boxes">
                        <div className="form__box">
                            <div className="form__border"> </div>
                            <p className="form__number">1</p>
                            <p className="form__text">Wybierz rzeczy</p>
                        </div>
                        <div className="form__box">
                            <div className="form__border"> </div>
                            <p className="form__number">2</p>
                            <p className="form__text">Spakuj je w worki</p>
                        </div>
                        <div className="form__box">
                            <div className="form__border"> </div>
                            <p className="form__number">3</p>
                            <p className="form__text">Wybierz fundację</p>
                        </div>
                        <div className="form__box">
                            <div className="form__border"> </div>
                            <p className="form__number">4</p>
                            <p className="form__text">Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
            {activeStep1 === true && <FormStep1 handleStep2={handleStep2}/>}
            {activeStep2 === true && <FormStep2 handleStep3={handleStep3}/>}
        </>
    );
};

export default Form;