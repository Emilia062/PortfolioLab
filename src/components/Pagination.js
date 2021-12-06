import React, {useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const [activeNumber, setActiveNumber] = useState(pageNumbers[0])

    for( let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i);
    }

    return (
        <ul className="help__pagination">
            {pageNumbers.map(number => {
                return (
                    <li key={number}>
                        <p onClick={() => {paginate(number); setActiveNumber(number)}}
                           className={activeNumber === number ? "help__pagination--number active" : "help__pagination--number"}>
                            {number}</p>
                    </li>
                )
            })}
            
        </ul>
    );
};

export default Pagination;