import React from 'react';
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

const HomeAboutUs = () => {
    return (
        <div className={"aboutUs"} id={"homeAboutUs"}>
            <div>
                <div className={"aboutUs__box"}>
                    <h2 className={"aboutUs__title"}>O nas</h2>
                    <img src={decoration} alt={"decoration"} className={"aboutUs__decoration"}/>
                    <p className={"aboutUs__description"}>Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature} alt={"signature"} className={"aboutUs__signature"}/>
                </div>
            </div>
            <div className={"aboutUs__people"}/>
        </div>
    );
};

export default HomeAboutUs;