import React from 'react';
import './Homecard.css';
import { Link } from 'react-router-dom';
import AnimationButton from '../../ButtonComp/AnimationButton';
import chip from "../../../assets/homepage/chipimg.jpg"
import vegitable from "../../../assets/homepage/vegitable.jpg"
import products from "../../../assets/homepage/product.jpg"
const HomeCard = () => {
  return (
    <div className="UniqueProductBlogs-Total">
      <h1 className="UniqueProductBlogs-title">Articles</h1>
      <div className='mainContainer'>
        <div className="UniqueProductBlogs-cards" data-aos="zoom-in-right" data-aos-duration="1300">
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="/PricingLabeling" style={{ textDecoration: "none" }}>
              <img src={chip} alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="/PricingLabeling" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">What is the Role of Shelf Monitoring Cameras in Ensuring Pricing and Labeling Accuracy</h2>
            </Link>
            {/* <p className="UniqueProductBlogs-card-text">Shelf monitoring cameras help in maintaining price compliance in retail stores by automated price tag scanning and verification. In this blog, you’ll learn about the role of shelf monitoring cameras in pricing and labeling, and the key camera features required</p> */}
            <AnimationButton text="Read more" className="home-readmore-btn" to="/PricingLabeling" />
          </div>
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
              <img src={vegitable} alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">What are the Latest Shelf Digitalization Technologies For Retailers?</h2>
            </Link>
            {/* <p className="UniqueProductBlogs-card-text">Explore various shelf digitalization technologies, their unique benefits, implementation challenges, and how they're transforming traditional retail operations. Get expert insights on choosing the right technology for your needs.</p> */}
            <AnimationButton text="Read more" className="home-readmore-btn" to="/ShelfDigitalization" />
          </div>
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="/PlanogramCompliance" style={{ textDecoration: "none" }}>
              <img src={products} alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="/PlanogramCompliance" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">How Smart Shelf Monitoring Ensures Accurate Planogram Compliance</h2>
            </Link>
            {/* <p className="UniqueProductBlogs-card-text">Planograms dictate the optimal placement of products on shelves to maximize visibility and sales. Shelf monitoring cameras automate the process of verifying product placement. Learn how shelf monitoring cameras automate planogram compliance verification, enabling real-time tracking of product placement and improving overall retail strategy. </p> */}
            <AnimationButton text="Read more" className="home-readmore-btn" to="/PlanogramCompliance"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
