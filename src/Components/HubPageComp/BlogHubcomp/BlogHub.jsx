import React from 'react';
import './BlogHub.css'; 
import AnimatedButton from "../../ButtonComp/AnimationButton";
import visionbased from "../../../assets/bloghubpage/Inventorycompliance.jpg"
import shefldigital from "../../../assets/bloghubpage/shelfdigitalization.jpg"
import pricinglabel from "../../../assets/bloghubpage/pricing&labeling.jpg"
import outofstocks from "../../../assets/bloghubpage/outofstocks.jpg"
import planogram from "../../../assets/bloghubpage/planogramcomplainence.jpg"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogHub = () => {
  return (
    <div className='casehubpage-hubtot-blog'>
      <Helmet>
      <title>SHELFVista Blog – Insights on Retail Shelf Monitoring & AI Solutions</title>
      <meta name='description' content='Explore the latest blogs and articles on retail shelf monitoring, AI-powered solutions, and best practices for optimizing retail operations with SHELFVista. Stay updated with industry insights, case studies, and expert tips to enhance inventory management and planogram compliance.' />
      </Helmet>
      <h1>Blogs</h1>
      <div className='mainContainer'>
      <div className="casehubpage-hubpageblog">
        <div className="casehubpage-hubblog-column left" data-aos="zoom-in-right" data-aos-duration="1000">
          <div className="casehubpage-hubblog-border-box">
            <Link to="/blogs/the-role-of-smart-cameras-in-inventory-and-compliance" style={{ textDecoration: "none" }}>
              <img src={visionbased} alt="Image Description" className='pricingandlael' />
            </Link>
            <Link to="/blogs/the-role-of-smart-cameras-in-inventory-and-compliance" style={{ textDecoration: "none" }}>
              <h2>The Role of Smart Cameras in Inventory and Compliance</h2>
            </Link>
            <p>Maintaining well-organized shelves is the key to retail success. Smart shelf-monitoring cameras elevate the inventory management experience by offering real-time insights into product availability, SKU compliance, and shelf organization. These AI-powered cameras ensure consistent adherence to planograms, prompt restocking, and accurate pricing—all while enhancing the shopping experience for customers.</p>
            <p>Through this blog, find out how shelf-monitoring cameras tackle common retail pain points, including On-Shelf Availability (OSA) and Out-of-Stock (OOS) tracking, Planogram (POG) compliance, and price tag accuracy. We are discussing how cameras with high-resolution imaging, AI-driven algorithms, and seamless integration capability can streamline operations and boost retail efficiency.</p>
            <AnimatedButton 
              className="casehubpage-read-more1" 
              text="Read more" 
                 textColor="white"
              backgroundColor="#344ea1" 
              hoverTextColor="#003873"
              to="/blogs/the-role-of-smart-cameras-in-inventory-and-compliance"
            />
          </div>
        </div>

        {/* Right four cards */}
        <div className="casehubpage-hubblog-column right" data-aos="zoom-in-left" data-aos-duration="1000">
          <div className="casehubpage-hubblog-card-row">
            <div className="casehubpage-hubblog-card">
              <Link to="/blogs/latest-shelf-digitalization-technologies-for-retailers" style={{ textDecoration: "none" }}>
                <img src={shefldigital} alt="Card Image 1" />
              </Link>
              <Link to="/blogs/latest-shelf-digitalization-technologies-for-retailers" style={{ textDecoration: "none" }}>
              <h6>What are the Latest Shelf Digitalization Technologies For Retailers?</h6>
              </Link>
              <p>Explore various shelf digitalization technologies, their unique benefits, implementation challenges...</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                hoverTextColor="#003873"
                   textColor="white"
                to="/blogs/latest-shelf-digitalization-technologies-for-retailers"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/blogs/osa-oos-monitoring-with-smart-cameras" style={{ textDecoration: "none" }}>
                <img src={outofstocks} alt="Card Image 2" />
              </Link>
              <Link to="/blogs/osa-oos-monitoring-with-smart-cameras" style={{ textDecoration: "none" }}>
              <h6>How Shelf Monitoring Cameras Tackle the Retail Out-of-Stock Problem</h6>
              </Link>
              <p>Tracking the availability of store products and knowing when products go out-of-stock is critical in retail.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1"
                textColor="white" 
                hoverTextColor="#003873"
                to="/blogs/osa-oos-monitoring-with-smart-cameras"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/blogs/shelf-monitoring-cameras-pricing-labeling-accuracy" style={{ textDecoration: "none" }}>
                <img src={pricinglabel} alt="Card Image 3" />
              </Link>
              <Link to="/blogs/shelf-monitoring-cameras-pricing-labeling-accuracy" style={{ textDecoration: "none" }}>
              <h6>What is the Role of Shelf Monitoring Cameras in Ensuring Pricing and Labeling Accuracy?</h6>
              </Link>
              <p>Shelf monitoring cameras help in maintaining price compliance in retail stores by automated...</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                   textColor="white"
                hoverTextColor="#003873"
                to="/blogs/shelf-monitoring-cameras-pricing-labeling-accuracy"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="/blogs/smart-shelf-monitoring-planogram-compliance" style={{ textDecoration: "none" }}>
                <img src={planogram} alt="Card Image 4" />
              </Link>
              <Link to="/blogs/smart-shelf-monitoring-planogram-compliance" style={{ textDecoration: "none" }}>
              <h6>How Smart Shelf Monitoring Ensures Accurate Planogram Compliance</h6>
              </Link>
              <p>Planograms dictate the optimal placement of products on shelves to maximize visibility and sales...</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                   textColor="white"
                backgroundColor="#344ea1" 
                hoverTextColor="#003873"
                to="/blogs/smart-shelf-monitoring-planogram-compliance"
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
