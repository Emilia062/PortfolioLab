import React from 'react';

const HomeThreeColumns = () => {
    return (
        <div className={"threeColumns"}>
            <div className={"threeColumns__box"}>
                <h2 className={"threeColumns__number"}>10</h2>
                <p className={"threeColumns__title"}>ODDANYCH WORKÓW</p>
                <div className={"threeColumns__description"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</div>
            </div>
            <div className={"threeColumns__box"}>
                <h2 className={"threeColumns__number"}>5</h2>
                <p className={"threeColumns__title"}>WSPARTYCH ORGANIZACJI</p>
                <div className={"threeColumns__description"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</div>
            </div>
            <div className={"threeColumns__box"}>
                <h2 className={"threeColumns__number"}>7</h2>
                <p className={"threeColumns__title"}>ZORGANIZOWANY ZBIÓREK</p>
                <div className={"threeColumns__description"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                    elementuma. Aliquam erat volutpat.</div>
            </div>
        </div>
    );
};

export default HomeThreeColumns;