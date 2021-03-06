import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import Foundations from "./Foundations";
import Organizations from "./Organizations";
import Collections from "./Collections";

const HomeWhoWeHelp = () => {
    const [itemsToShow, setItemsToShow] = useState("foundations");

    return (
        <div id="homeWhoWeHelp" className="help">
            <h2 className="help__title">Komu pomagamy?</h2>
            <img src={decoration} alt={decoration} className="help__decoration"/>
            <div className="help__organizations">
                <span className={itemsToShow === "foundations" ? "help__link active" : "help__link"}
                   onClick= {() => setItemsToShow("foundations")} >Fundacjom</span>
                <span className={itemsToShow === "organizations" ? "help__link active" : "help__link"}
                   onClick={() => setItemsToShow("organizations")}>
                <div >Organizacjom<br/>pozarządowym</div>
                </span>
                <span className={itemsToShow === "collections" ? "help__link active" : "help__link"} onClick={() => setItemsToShow("collections")}>
                <div>Lokalnym<br/>zbiórkom</div>
                </span>
            </div>
            <p className="help__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div>
            {itemsToShow === "foundations" && (
                    <Foundations />
            )}
            {itemsToShow === "organizations" && (
                    <Organizations />
            )}
            {itemsToShow === "collections" && (
                    <Collections />
            )}
            </div>
        </div>
    );
};

export default HomeWhoWeHelp;