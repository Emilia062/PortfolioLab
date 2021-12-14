import React, {useState} from 'react';
import Pagination from "./Pagination";
import {organizations} from "../mockdata";

const Organizations = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = organizations.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
            <>
                {currentPosts.map((item, index) => {
                    return(
                        <div key={index} className="help__list">
                            <div className="help__list--titles">
                                <p className="help__list--title">Organizacja "{item.title}"</p>
                                <p className="help__list--text1">{item.text1}</p>
                            </div>
                            <p className="help__list--text2">{item.text2}</p>
                        </div>
                    )
                })}
                <Pagination postsPerPage={postsPerPage} totalPosts={organizations.length} paginate={paginate}/>
            </>
    );
};

export default Organizations;