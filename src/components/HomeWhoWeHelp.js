import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import Foundations from "./Foundations";
import Organizations from "./Organizations";
import Collections from "./Collections";
import {NavLink} from "react-router-dom";

const HomeWhoWeHelp = () => {
    const foundationsArray = [
        {title:"Lorem Ipsum 1", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 2", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 3", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
        {title:"Lorem Ipsum 4", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 5", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 6", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
        {title:"Lorem Ipsum 7", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 8", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 9", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
    ]

    const collectionsArray = [
        {title:"Lorem Ipsum 1", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 2", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 3", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
    ]

    const organizationsArray = [
        {title:"Lorem Ipsum 1", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 2", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 3", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
        {title:"Lorem Ipsum 4", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 5", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 6", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
    ]

    const [itemsToShow, setItemsToShow] = useState("foundations");
    const [foundations] = useState(foundationsArray);
    const [collections] = useState(collectionsArray);
    const [organizations] = useState(organizationsArray);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = foundations.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div id={"homeWhoWeHelp"} className={"help"}>
            <h2 className={"help__title"}>Komu pomagamy?</h2>
            <img src={decoration} alt={decoration} className={"help__decoration"}/>
            <div className={"help__organizations"}>
                <a className={"help__link"} onClick= {() => setItemsToShow("foundations")} >Fundacjom</a>
                <a className={"help__link"} onClick={() => setItemsToShow("organizations")}>
                <div >Organizacjom</div> <div>pozarządowym</div>
                </a>
                <a className={"help__link"} onClick={() => setItemsToShow("collections")}>
                <div>Lokalnym</div> <div>zbiórkom</div>
                </a>
            </div>
            <p className={"help__text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div>
            {itemsToShow === "foundations" && (
                <>
                    <Foundations currentPosts={currentPosts} paginate={paginate} postsPerPage={postsPerPage} foundations={foundations}/>
                </>
            )}
            {itemsToShow === "organizations" && (
                <>
                    <Organizations currentPosts={currentPosts} paginate={paginate} postsPerPage={postsPerPage} organizations={organizations}/>
                </>
            )}
            {itemsToShow === "collections" && (
                <>
                    <Collections collections={collections}/>
                </>
            )}
            </div>
        </div>
    );
};

export default HomeWhoWeHelp;