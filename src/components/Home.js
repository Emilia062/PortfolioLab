import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

const Home = () => {
    const [isActiveLogin, setIsActiveLogin] = useState(false);
    const [isActiveRegistration, setIsActiveRegistration] = useState(false);

    const handleActiveLogin = () => {
        setIsActiveLogin(true);
        setIsActiveRegistration(false);
    }

    const handleActiveRegistration = () => {
        setIsActiveRegistration(true);
        setIsActiveLogin(false);
    }

    const handleHome = () => {
        setIsActiveRegistration(false);
        setIsActiveLogin(false);
    }
    return (
      <>
          <HomeHeader isActiveLogin={isActiveLogin} isActiveRegistration={isActiveRegistration}
           handleHome={handleHome} handleActiveLogin={handleActiveLogin}
                      handleActiveRegistration={handleActiveRegistration}/>
          <HomeThreeColumns/>
          <HomeFourSteps handleActiveLogin={handleActiveLogin}/>
          <HomeAboutUs/>
          <HomeWhoWeHelp/>
          <HomeContact/>
          <HomeFooter/>
      </>
    );
};

export default Home;