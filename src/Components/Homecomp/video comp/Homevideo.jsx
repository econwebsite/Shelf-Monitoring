
import React, { useState } from 'react';
import './Homevideo.css';
import Vediothumbnail from "../../../assets/homepage/homevideothump.jpg"; 


import FsLightbox from "fslightbox-react";

function Homevideo() {
  const [leftToggler, setLeftToggler] = useState(false);
  const [rightToggler, setRightToggler] = useState(false);

  return (
    <>
      <div className="tot-denvedio">
        <div className="mainContainer">
          <h2>Video</h2>
          <div className="thumbnail-row">
            <img
              src={Vediothumbnail}
              alt="Left Thumbnail"
              className="small-thumbnail"
              onClick={() => setLeftToggler(!leftToggler)}
            />
            <img
              src={Vediothumbnail}
              alt="Right Thumbnail"
              className="small-thumbnail"
              onClick={() => setRightToggler(!rightToggler)}
            />
          </div>

          <FsLightbox
            toggler={leftToggler}
            sources={["https://www.youtube.com/embed/g6rJBSUpMYE?autoplay=1"]}
          />
          <FsLightbox
            toggler={rightToggler}
            sources={["https://www.youtube.com/embed/g6rJBSUpMYE?autoplay=1"]}
          />
        </div>
      </div>
    </>
  );
}

export default Homevideo;

