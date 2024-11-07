import React from 'react';
import './BlogHub.css'; 
import AnimatedButton from "../../ButtonComp/AnimationButton";
import { Link } from 'react-router-dom';

const BlogHub = () => {
  return (
    <div className='casehubpage-hubtot-blog'>
      <h1>Blogs</h1>
      <div className='mainContainer'>
      <div className="casehubpage-hubpageblog">
        <div className="casehubpage-hubblog-column left" data-aos="zoom-in-right" data-aos-duration="1000">
          <div className="casehubpage-hubblog-border-box">
            <Link to="/PricingLabeling" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/500x450.png" alt="Image Description" />
            </Link>
            <Link to="/PricingLabeling" style={{ textDecoration: "none" }}>
              <h2>What is the Role of Shelf Monitoring Cameras in Ensuring Pricing and Labeling Accuracy?</h2>
            </Link>
            <p>Shelf monitoring cameras help in maintaining price compliance in retail stores by automated price tag scanning and verification. In this blog, you’ll learn about the role of shelf monitoring cameras in pricing and labeling, and the key camera features required. </p>
            <p>Fusce faucibus, sem vel Fusce faucibus, sem velVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risusleo urna hendrerit risus.ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.Vestibulum ante ipsum ipsum primis in faucibus orci  Vestibulum ante Vestibulumipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.</p>
            <AnimatedButton 
              className="casehubpage-read-more1" 
              text="Read more" 
              backgroundColor="#344ea1" 
              animationColor="#69ba2f" 
              hoverColor="#69ba2f" 
              to="/PricingLabeling"
            />
          </div>
        </div>

        {/* Right four cards */}
        <div className="casehubpage-hubblog-column right" data-aos="zoom-in-left" data-aos-duration="1000">
          <div className="casehubpage-hubblog-card-row">
            <div className="casehubpage-hubblog-card">
              <Link to="/ShelfDigitalization" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 1" />
              </Link>
              <h6>What are the Latest Shelf Digitalization Technologies For Retailers?</h6>
              <p>Explore various shelf digitalization technologies, their unique benefits, implementation challenges, and how they're transforming traditional retail operations.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                animationColor="#69ba2f" 
                hoverColor="#69ba2f" 
                to="/ShelfDigitalization"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 2" />
              </Link>
              <h6>How Shelf Monitoring Cameras Tackle the Retail Out-of-Stock Problem</h6>
              <p>Tracking the availability of store products and knowing when products go out-of-stock is critical in retail.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                animationColor="#69ba2f" 
                hoverColor="#69ba2f" 
                to=""
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/RetailExperience" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 3" />
              </Link>
              <h6>How vision-based shelf monitoring helps retailers</h6>
              <p>The shelves in retail stores are packed with thousands of unique Consumer Packaged Goods (CPG).</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                animationColor="#69ba2f" 
                hoverColor="#69ba2f" 
                to="/RetailExperience"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/PlanogramCompliance" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 4" />
              </Link>
              <h6>How Smart Shelf Monitoring Ensures Accurate Planogram Compliance</h6>
              <p>Planograms dictate the optimal placement of products on shelves to maximize visibility and sales...</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                animationColor="#69ba2f" 
                hoverColor="#69ba2f" 
                to="/PlanogramCompliance"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogHub;
