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
        <div className="casehubpage-hubblog-column left">
          <div className="casehubpage-hubblog-border-box">
            <Link to="" style={{ textDecoration: "none" }}>
              <img src="https://placehold.jp/500x450.png" alt="Image Description" />
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Duis sit amet ipsum at elit auctor hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Duis sit amet ipsum at elit auctor hendrerit.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risusleo urna hendrerit risus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus, sem vel malesuada placerat, leo urna hendrerit risus.</p>
            <AnimatedButton 
              className="casehubpage-read-more1" 
              text="Read more" 
              backgroundColor="#344ea1" 
              animationColor="#69ba2f" 
              hoverColor="#69ba2f" 
              to=""
            />
          </div>
        </div>

        {/* Right four cards */}
        <div className="casehubpage-hubblog-column right">
          <div className="casehubpage-hubblog-card-row">
            <div className="casehubpage-hubblog-card">
              <Link to="" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 1" />
              </Link>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
              <p>Curabitur quis libero non urna commodo finibus non et justo. Phasellus consectetur gravida dui sit amet malesuada.</p>
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
              <Link to="" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 2" />
              </Link>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
              <p>Nullam auctor magna euismod, dapibus est et, venenatis augue. Sed malesuada ipsum vitae arcu accumsan vestibulum.</p>
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
              <Link to="" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 3" />
              </Link>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
              <p>Proin cursus erat eu ligula consequat, ut placerat purus molestie. Ut tincidunt augue sed magna viverra, nec dapibus risus cursus.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                animationColor="#69ba2f" 
                hoverColor="#69ba2f" 
                to="/blogs/three-important-parameters-in-intraoral-camera-technology"
              />
            </div>

            <div className="casehubpage-hubblog-card">
              <Link to="" style={{ textDecoration: "none" }}>
                <img src="https://placehold.jp/259x156.png" alt="Card Image 4" />
              </Link>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
              <p>Duis fermentum orci a massa lacinia, a laoreet nunc faucibus. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <AnimatedButton 
                className="casehubpage-read-more" 
                text="Read more" 
                backgroundColor="#344ea1" 
                animationColor="#69ba2f" 
                hoverColor="#69ba2f" 
                to=""
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
