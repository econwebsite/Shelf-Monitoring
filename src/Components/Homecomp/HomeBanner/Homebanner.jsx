import React from 'react';
import "./Homebanner.css";
import homebanner1 from "../../../assets/homepage/banner1.jpg";
import homebanner2 from "../../../assets/homepage/banner2.jpg";
import homebanner3 from "../../../assets/homepage/banner3.jpg";
import homebanner4 from "../../../assets/homepage/banner4.jpg";
import AnimationButton from "../../ButtonComp/AnimationButton";

const Homebanner = () => {
    return (
        <div className='HomeBanner-carouselContainer'>
            <div className="mainContainer">
                <div className='HomeBanner-homeBanner'>
                    <img src={homebanner1} alt="Slide 1" className="HomeBanner-carouselImage" />
                    <div className='HomeBanner-homeButton'>
                        <AnimationButton text="Read more" backgroundColor="black"textColor="white" hoverBackgroundColor="red"hoverTextColor="#344ea1" className="HomeBanner-productIntraButtonEnd" to=""/>
                    </div>
                </div>
                <div className='HomeBanner-bannerLine'></div>
                <div className='HomeBanner-homeBanner'>
                    <img src={homebanner2} alt="Slide 1" className="HomeBanner-carouselImage" />
                    <div className='HomeBanner-homeButton'>
                        <AnimationButton text="Read more" backgroundColor="black"textColor="white" hoverBackgroundColor="red"hoverTextColor="#344ea1" className="HomeBanner-productIntraButton2" to=""/>
                    </div>
                </div>
                <div className='HomeBanner-banner2Line'></div>
                <div className='HomeBanner-homeBanner'>
                    <img src={homebanner3} alt="Slide 1" className="HomeBanner-carouselImage" />
                    <div className='HomeBanner-homeButton'>
                        <AnimationButton text="Read more" backgroundColor="black"textColor="white" hoverBackgroundColor="red"hoverTextColor="#344ea1" className="HomeBanner-productIntraButtonEnd" to=""/>
                    </div>
                </div>
                <div className='HomeBanner-bannerLine'></div>
                <div className='HomeBanner-homeBanner'>
                    <img src={homebanner4} alt="Slide 1" className="HomeBanner-carouselImage" />
                    <div className='HomeBanner-homeButton'>
                    <AnimationButton text="Read more" backgroundColor="black"textColor="white" hoverBackgroundColor="red"hoverTextColor="#344ea1"className="HomeBanner-productIntraButton2" to=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homebanner;
