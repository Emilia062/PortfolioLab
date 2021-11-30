import React from 'react';
import Pagination from "./Pagination";

const Foundations = ({currentPosts, paginate, postsPerPage, foundations}) => {

    return (
        <>
            {currentPosts.map((item, index) => {
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
            <Pagination postsPerPage={postsPerPage} totalPosts={foundations.length} paginate={paginate}/>
        </>
    );
};

export default Foundations;