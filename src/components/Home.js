import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeMain from "./HomeMain";

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
      </>
    );
};

export default Home;