import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeMain from "./HomeMain";
import Login from "./Login";
import Registration from "./Registration";
import Form from "./Form";

const Home = () => {

    return (
      <>
          <HomeHeader />
          <HomeMain/>
          <HomeThreeColumns/>
          <HomeFourSteps />
          <HomeAboutUs/>
          <HomeWhoWeHelp/>
          <HomeContact/>
          {/*<Login/>*/}
          {/*<Registration/>*/}
          {/*<Form/>*/}
      </>
    );
};

export default Home;