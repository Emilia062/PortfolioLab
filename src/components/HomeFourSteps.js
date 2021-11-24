import React from 'react';
import decoration from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";
import {BrowserRouter, Link} from "react-router-dom";

const HomeFourSteps = () => {
    return (
        <div id={"homeFourSteps"} className={"fourSteps"}>
            <div className={"fourSteps__entrance"}>
                <h2 className={"fourSteps__title"}>Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt={decoration} className={"fourSteps__decoration"}/>
            </div>
            <div className={"fourSteps__boxes"}>
                <div className={"fourSteps__box"}>
                    <img src={icon1} alt={"clothes"} className={"box__icon"}/>
                    <p className={"box__title"}>Wybierz rzeczy</p>
                    <div className={"box__line"}> </div>
                    <p className={"box__description"}>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className={"fourSteps__box"}>
                    <img src={icon2} alt={"bag"} className={"box__icon"}/>
                    <p className={"box__title"}>Spakuj je</p>
                    <div className={"box__line"}> </div>
                    <p className={"box__description"}>skorzystaj z worków na śmieci</p>
                </div>
                <div className={"fourSteps__box"}>
                    <img src={icon3} alt={"magnifier"} className={"box__icon"}/>
                    <p className={"box__title"}>Zdecyduj komu chcesz pomóc</p>
                    <div className={"box__line"}> </div>
                    <p className={"box__description"}>wybierz zaufane miejsce</p>
                </div>
                <div className={"fourSteps__box"}>
                    <img src={icon4} alt={"recycling"} className={"box__icon"}/>
                    <p className={"box__title"}>Zamów kuriera</p>
                    <div className={"box__line"}> </div>
                    <p className={"box__description"}>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <BrowserRouter>
                <div className={"fourSteps__button"}>
                    <button className={"fourSteps__btn btn"}>
                        <Link to="/logowanie" className={"fourSteps__link"}><div>ODDAJ</div><div>RZECZY</div></Link>
                    </button>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default HomeFourSteps;