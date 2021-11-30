import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

const Home = () => {
    return (
      <>
          <HomeHeader/>
          <HomeThreeColumns/>
          <HomeFourSteps/>
          <HomeAboutUs/>
          <HomeWhoWeHelp/>
          <HomeContact/>
          <HomeFooter/>
      </>
    );
};

export default Home;