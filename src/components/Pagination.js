import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for( let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i);
    }

    return (
        <ul className={"help__pagination"}>
            {pageNumbers.map(number => {
                return (
                    <li key={number}>
                        <p onClick={() => paginate(number)} className={"help__pagination--number"}>{number}</p>
                    </li>
                )
            })}
            
        </ul>
    );
};

export default Pagination;