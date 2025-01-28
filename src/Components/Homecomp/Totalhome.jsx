import React from 'react';
import HomeCard from "./HomeCard/HomeCard"
import HomeTabs from "./HomeTabs/HomeTabs"
import ShelfPara from './Homepara/ShelfPara';
import Whychoose from "./WhyChoose/Whychoose"
import Specification from './SpecificationComp/Specification';
import CarouselSlider from './CarouselComp/CarouselSlider';
import Homevideo from "./video comp/Homevideo"
import { Helmet } from 'react-helmet-async';

const Totalhome = () => {
    return (
        <div>

<Helmet>
<title>SHELFVista – AI Wi-Fi Camera for Smarter Retail Management</title>
<meta name='description' content='SHELFVista is an AI-powered Wi-Fi camera for retail, offering real-time shelf visibility, reducing out-of-stock issues, ensuring planogram compliance, and detecting pricing errors.' />
</Helmet>
            <CarouselSlider/>
            <ShelfPara/>
             <Homevideo/>
            <HomeTabs/>
            <Specification/>
            <Whychoose/>
            <br></br>
            <HomeCard/>
        </div>
    );
}

export default Totalhome;
