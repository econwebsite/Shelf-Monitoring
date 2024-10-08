import React from 'react';
import './Homecard.css';
import { Link } from 'react-router-dom';
import AnimationButton from '../../ButtonComp/AnimationButton';

const HomeCard = () => {
  return (
    <div className="UniqueProductBlogs-Total">
      <h1 className="UniqueProductBlogs-title">Articles</h1>
      <div className='UniqueMainContainer'>
        <div className="UniqueProductBlogs-cards">
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/321x202.png" alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="/ForwardBlog" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">Wide-Angle Optics (120-degree FOV)</h2>
            </Link>
            <p className="UniqueProductBlogs-card-text">Covers extensive shelf space, monitoring over 300 products up to 5 meters, reducing blind spots.</p>
            <AnimationButton text="Read more" className="home-readmore-btn" />
          </div>
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="/HdrLedBlog" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/321x202.png" alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="/HdrLedBlog" style={{ textDecoration: "none" }}>
              <h2 className="UniqueProductBlogs-card-title">Wide-Angle Optics (120-degree FOV)</h2>
            </Link>
            <p className="UniqueProductBlogs-card-text">Covers extensive shelf space, monitoring over 300 products up to 5 meters, reducing blind spots.</p>
            <AnimationButton text="Read more" className="home-readmore-btn" />
          </div>
          <div className="UniqueProductBlogs-card">
            <Link className="UniqueCardImgLink" to="/DrivermonBlog" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/321x202.png" alt="AI-enabled point of care device" className="UniqueProductBlogs-card-image" />
            </Link>
            <Link className="UniqueCardTitleLink" to="/DrivermonBlog" style={{ textDecoration: "none" }}>
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
