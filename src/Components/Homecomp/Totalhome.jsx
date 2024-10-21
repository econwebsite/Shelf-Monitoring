import React from 'react';
// import Homebanner from './HomeBanner/Homebanner';
import Keyfeatures from "./KeyFeatures/Keyfeatures"
import HomeCard from "./HomeCard/HomeCard"
import Homeboderbox from "./HomeBoderbox/Homeboderbox"
import Bannerone from "./Bannnercomp/Bannerone/Bannerone"
// import Bannertwo from "./Bannnercomp/Bannertwo/Bannertwo"
// import Bannerthree from './Bannnercomp/Bannerthreecomp/Bannerthree';
import Bannerfour from './Bannnercomp/Bannerfourcomp/Bannerfour';
import HomeTabs from "./HomeTabs/HomeTabs"

const Totalhome = () => {
    return (
        <div>
            <Bannerone/>
            <HomeTabs/>
            <Homeboderbox/>
            <Keyfeatures/>
            <HomeCard/>
        </div>
    );
}

export default Totalhome;
