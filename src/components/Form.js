import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import decoration from "../assets/Decoration.svg";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormSummary from "./FormSummary";
import HomeContact from "./HomeContact";

const Form = () => {
    const [activeStep1, setActiveStep1] = useState(true);
    const [activeStep2, setActiveStep2] = useState(false);
    const [activeStep3, setActiveStep3] = useState(false);
    const [activeStep4, setActiveStep4] = useState(false);
    const [activeSummary, setActiveSummary] = useState(false);

//Information from form
    //Step1
    const [things, setThings] = useState("")
    //Step2
    const [amountOfBags, setAmountOfBags] = useState();
    //Step 3
    const [location, setLocation] = useState("");
    const [whoHelps, setWhoHelps] = useState([]);
    const [organization, setOrganization] = useState("")
    //Step 4
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");

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
            {activeStep1 === true && <FormStep1 setActiveStep1={setActiveStep1} setActiveStep2={setActiveStep2} setThings={setThings}/>}
            {activeStep2 === true && <FormStep2 setActiveStep2={setActiveStep2} setActiveStep3={setActiveStep3}
                                                setActiveStep1={setActiveStep1} amountOfBags={amountOfBags} setAmountOfBags={setAmountOfBags}/>}
            {activeStep3 === true && <FormStep3 setActiveStep2={setActiveStep2} setActiveStep3={setActiveStep3}
                                               setActiveStep4={setActiveStep4} location={location} setLocation={setLocation}
            organization={organization} setWhoHelps={setWhoHelps} setOrganization={setOrganization}/>}
            {activeStep4 === true && <FormStep4 setActiveStep4={setActiveStep4} setActiveStep3={setActiveStep3} setSummary={setActiveSummary}
            street={street} setStreet={setStreet} city={city} setCity={setCity} postCode={postCode} setPostCode={setPostCode}
            phoneNumber={phone} setPhone={setPhone} date={date} setDate={setDate} time={time} setTime={setTime}
            notes={notes} setNotes={setNotes}/>}
            {activeSummary === true && <FormSummary things={things} amountOfBags={amountOfBags} location={location} whoHelps={whoHelps} street={street} city={city}
            postCode={postCode} phone={phone} date={date} time={time} notes={notes} organization={organization} setActiveStep4={setActiveStep4}
            setActiveSummary={setActiveSummary}/>}
            <HomeContact/>
        </>
    );
};

export default Form;