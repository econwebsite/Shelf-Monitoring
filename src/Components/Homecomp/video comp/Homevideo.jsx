
import React, { useState } from 'react';
import './Homevideo.css';
import leftthump from "../../../assets/homepage/homevideothump-1.jpg"; 
import rightthump from "../../../assets/homepage/homevideothump-2.jpg"; 



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
              src={leftthump}
              alt="Left Thumbnail"
              className="small-thumbnail"
              onClick={() => setLeftToggler(!leftToggler)}
            />
            <img
              src={rightthump}
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
            sources={["https://www.youtube.com/embed/kfyMM11ny1M?autoplay=1"]}
          />
        </div>
      </div>
    </>
  );
}

export default Homevideo;

