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
            <Link className="UniqueCardImgLink" to="" style={{ textDecoration: "none" }}>
              <img src={chip} alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">Wide-Angle Optics (120-degree FOV)</h2>
            </Link>
            <p className="UniqueProductBlogs-card-text">Covers extensive shelf space, monitoring over 300 products up to 5 meters, reducing blind spots.</p>
            <AnimationButton text="Read more" className="home-readmore-btn" />
          </div>
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="" style={{ textDecoration: "none" }}>
              <img src={vegitable} alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">Wide-Angle Optics (120-degree FOV)</h2>
            </Link>
            <p className="UniqueProductBlogs-card-text">Covers extensive shelf space, monitoring over 300 products up to 5 meters, reducing blind spots.</p>
            <AnimationButton text="Read more" className="home-readmore-btn" />
          </div>
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="" style={{ textDecoration: "none" }}>
              <img src={products} alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">Wide-Angle Optics (120-degree FOV)</h2>
            </Link>
            <p className="UniqueProductBlogs-card-text">Covers extensive shelf space, monitoring over 300 products up to 5 meters, reducing blind spots.</p>
            <AnimationButton text="Read more" className="home-readmore-btn" to=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
