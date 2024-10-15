// import React, { useEffect } from 'react';
// import './Homebanner.css';
// import homebanner1 from '../../../assets/homepage/banner1.jpg';
// import homebanner2 from '../../../assets/homepage/banner2.jpg';
// import homebanner3 from '../../../assets/homepage/banner3.jpg';
// import homebanner4 from '../../../assets/homepage/banner4.jpg';
// import AnimationButton from '../../ButtonComp/AnimationButton';

// const Homebanner = () => {
//     useEffect(() => {
//         const handleScroll = () => {
//             const banners = document.querySelectorAll('.HomeBanner-homeBanner');
//             banners.forEach((banner, index) => {
//                 const rect = banner.getBoundingClientRect();
//                 if (rect.top < window.innerHeight && rect.bottom >= 0) {
//                     console.log(`Banner ${index + 1} is in view`);
//                     banner.classList.add(`animate-slide-${index + 1}`);
//                 }
//             });
//         };

//         handleScroll();

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className='HomeBanner-carouselContainer'>
//             <div className='HomeBanner-mainContainer'>
//                 <div className='HomeBanner-homeBanner'>
//                     <img src={homebanner1} alt="Slide 1" className="HomeBanner-carouselImage" />
//                     <div className='HomeBanner-homeButton'>
//                         <AnimationButton text="Read more" backgroundColor="#003873" textColor="white" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="HomeBanner-productIntraButtonEnd" to="" />
//                     </div>
//                 </div>
//                 <div className='HomeBanner-bannerLine'></div>
//                 <div className='HomeBanner-homeBanner'>
//                     <img src={homebanner2} alt="Slide 2" className="HomeBanner-carouselImage" />
//                     <div className='HomeBanner-homeButton'>
//                         <AnimationButton text="Read more" backgroundColor="#003873" textColor="white" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="HomeBanner-productIntraButton2" to="" />
//                     </div>
//                 </div>
//                 <div className='HomeBanner-banner2Line'></div>
//                 <div className='HomeBanner-homeBanner'>
//                     <img src={homebanner3} alt="Slide 3" className="HomeBanner-carouselImage" />
//                     <div className='HomeBanner-homeButton'>
//                         <AnimationButton text="Read more" backgroundColor="#003873" textColor="white" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="HomeBanner-productIntraButtonEnd" to="" />
//                     </div>
//                 </div>
//                 <div className='HomeBanner-bannerLine'></div>
//                 <div className='HomeBanner-homeBanner'>
//                     <img src={homebanner4} alt="Slide 4" className="HomeBanner-carouselImage" />
//                     <div className='HomeBanner-homeButton'>
//                         <AnimationButton text="Read more" backgroundColor="#003873" textColor="white" hoverBackgroundColor="red" hoverTextColor="#344ea1" className="HomeBanner-productIntraButton2" to="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Homebanner;
