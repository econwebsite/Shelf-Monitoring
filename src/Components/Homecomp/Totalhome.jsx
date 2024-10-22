import React from 'react';
import HomeCard from "./HomeCard/HomeCard"
import Bannerone from "./Bannnercomp/Bannerone/Bannerone"
import HomeTabs from "./HomeTabs/HomeTabs"
import ShelfPara from './Homepara/ShelfPara';
import KeyFeatures from "./KeyFeaturescomp/KeyFeatures"
import Specification from './SpecificationComp/Specification';

const Totalhome = () => {
    return (
        <div>
            <Bannerone/>
            <ShelfPara/>

            <HomeTabs/>
            <KeyFeatures/>
            <Specification/>
            <HomeCard/>
        </div>
    );
}

export default Totalhome;
