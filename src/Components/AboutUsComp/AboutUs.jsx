import React from 'react';
import './AboutUs.css';

import ce from '../../assets/homepage/certificates-01.png';
import fc from '../../assets/homepage/certificates-02.png';
import rohs from '../../assets/homepage/certificates-03.png';
import tic from '../../assets/homepage/certificates-04.png';



export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="mainContainer">
        <div className="aboutus-econ-systems">
          <p className="aboutus-heading">About e-con Systems</p>
          <p className="aboutus-paragraph">
          Established in 2003, e-con Systems has grown into a leading OEM camera solution provider with a wide global footprint. We provide end-to-end camera solutions like MIPI cameras, GMSL cameras, USB 3.1 Gen 1 cameras, stereo cameras, Time of Flight cameras, GigE cameras and more. Over the years, we have reimagined how they are used in applications such as retail, medical, industrial, agriculture, smart city, etc.
          </p>
          <p className="aboutus-paragraph">
          We are also powered by a strong partner ecosystem, providing end-to-end vision solutions with sensor partners, ISP partners, carrier board partners, and more.
          </p>
          <p className="aboutus-paragraph">
          So far, we have built 350+ product solutions - shipping over 2 million cameras to the United States, Europe, Japan, South Korea, and many more countries.
          </p>
          <p className="aboutus-paragraph">
            To know more about e-con Systems <a href="https://www.e-consystems.com/aboutus.asp" target="_blank" rel="noopener noreferrer">click here</a>
          </p>
        </div>

        <div className="aboutus-econ-systems">
          <p className="aboutus-heading">Quality policy</p>
          <p className="aboutus-paragraph">
            e-con Systems&reg; designs, manufactures, and delivers quality products to its customers and strives consistently to excel through continual improvement.
          </p>
          <p className="aboutus-paragraph">
            Our camera products provide lifetime support to your end applications with state-of-the-art manufacturing, design, and quality processes in place. We also provide a 3-years warranty period on all our camera products, which speaks for our commitment to ensuring product quality and standing by our customers.
          </p>
          <p className="aboutus-paragraph">
            As an ISO 9001:2015 certified company, e-con Systems&reg; is aware of the need for regulatory compliance with regards to its products sold globally. Please visit our Product Compliance Declaration for more details.
          </p>
          <p className="aboutus-paragraph">
          Our products are compliant with key industry standards and certifications, including          </p>
<br></br>
          <div className="aboutus-image-row">
            <div className="aboutus-image-wrapper">
              <img src={ce} alt="Certification CE" />
            </div>
            <div className="aboutus-image-wrapper">
              <img src={fc} alt="Certification FC" />
            </div>
            <div className="aboutus-image-wrapper">
              <img src={rohs} alt="Certification CE" />
            </div>
            <div className="aboutus-image-wrapper">
              <img src={tic} alt="Certification FC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
