import React from 'react';
import {collections} from "../mockdata";

const Collections = () => {

    return (
        <>
            {collections.map((item, index) => {
                return(
                    <div key={index} className={"help__list"}>
                        <div className={"help__list--titles"}>
                            <p className={"help__list--title"}>Zbiórka "{item.title}"</p>
                            <p className={"help__list--text1"}>{item.text1}</p>
                        </div>
                        <p className={"help__list--text2"}>{item.text2}</p>
                    </div>
                )
            })}
        </>
    );
};

export default Collections;