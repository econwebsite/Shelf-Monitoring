import React from 'react';
import HomeCard from "./HomeCard/HomeCard"
import HomeTabs from "./HomeTabs/HomeTabs"
import ShelfPara from './Homepara/ShelfPara';
import KeyFeatures from "./KeyFeaturescomp/KeyFeatures"
import Specification from './SpecificationComp/Specification';
import CarouselSlider from './CarouselComp/CarouselSlider';

const Totalhome = () => {
    return (
        <div>
            <CarouselSlider/>
            <ShelfPara/>

            <HomeTabs/>
            <Specification/>
            <KeyFeatures/>
            <br></br>
            <HomeCard/>
        </div>
    );
}

export default Totalhome;
