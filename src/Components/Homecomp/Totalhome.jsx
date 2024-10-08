import React from 'react';
// import Homebanner from './HomeBanner/Homebanner';
import Keyfeatures from "./KeyFeatures/Keyfeatures"
import HomeCard from "./HomeCard/HomeCard"
import Homeboderbox from "./HomeBoderbox/Homeboderbox"
const Totalhome = () => {
    return (
        <div>
            {/* <Homebanner/> */}
            <Homeboderbox/>
            <Keyfeatures/>
            <HomeCard/>
        </div>
    );
}

export default Totalhome;
