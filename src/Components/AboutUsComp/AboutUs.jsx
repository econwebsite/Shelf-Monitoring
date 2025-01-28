import React from "react";
import "./AboutUs.css";
import aboutus from "../../assets/homepage/about-us.jpg";
import ce from "../../assets/homepage/certificates-01.png";
import fc from "../../assets/homepage/certificates-02.png";
import rohs from "../../assets/homepage/certificates-03.png";
import tic from "../../assets/homepage/certificates-04.png";
import { MdLocationOn } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import cesbanner from "../../assets/homepage/cesbanner.jpg"
import { Helmet } from 'react-helmet-async';



const AboutUs = () => {
  return (
    <div className="AboutUs-container">
      <Helmet>
      <title>About e-con Systems - Leading OEM Camera Solutions Provider</title>
      <meta name='description' content='e-con Systems, established in 2003, is a global leader in OEM camera solutions, offering MIPI, GMSL, USB, stereo, and more. With 350+ solutions shipped worldwide, we provide end-to-end vision solutions across various industries.' />
      </Helmet>
              <div className="mainContainer">

      <h1 className="AboutUs-title">About e-con Systems</h1>
      <div className="AboutUs-section">
        <div className="AboutUs-left">
          <img src={aboutus} alt="About Us" className="AboutUs-img" />

        </div>
        <div className="AboutUs-right">
          <p>
          Established in 2003, e-con Systems&reg; has grown into a leading OEM camera solution provider with a wide global footprint. We provide end-to-end camera solutions like MIPI cameras, GMSL cameras, USB 3.1 Gen 1 cameras, stereo cameras, Time-of-Flight cameras, GigE cameras, and more. Over the years, we have reimagined how they are used in industries such as retail, medical, industrial, agriculture, smart city, etc.
          </p>
          <p>
          We are also powered by a strong partner ecosystem, providing end-to-end vision solutions with sensor partners, ISP partners, carrier board partners, and more.          </p>
          <p>So far, we have built 350+ product solutions - shipping over 2 million cameras to the United States, Europe, Japan, South Korea, and many more countries.</p>
          <p>To know more, <a href="https://www.e-consystems.com/aboutus.asp" className="Aboutlink"> click here. </a></p>
        </div>
      </div>

{/* <div className="AboutUs-new-container">
  <div className="AboutUs-new-left">
    <h2 className="AboutUs-new-title">BEYOND IMAGING</h2>
    <h6>
      AI-Powered Vision Solutions
    </h6>
    <h6>Explore Live Demos. Meet Our Camera Experts!</h6>
    <div className="AboutUs-icon-row">
      <div className="AboutUs-icon-item">
      <MdLocationOn className="AboutUs-icon"/>

        <div className="AboutUs-icon-content">
          <p className="AboutUs-icon-text">Booth Number: 9517<br></br><span>LVCC, Las Vegas</span>
          </p>
        </div>
      </div>
      <div className="AboutUs-icon-item">
      <BsCalendarDate className="AboutUs-icon" />
        <div className="AboutUs-icon-content">
          <p className="AboutUs-icon-text">January 7-10,2025</p>
        </div>
      </div>
    </div>
  </div>

  <div className="AboutUs-new-right">
    <div className="AboutUs-placeholder">
      <a href="https://www.e-consystems.com/events/ces-2025.asp">
      <img src={cesbanner} alt="Placeholder" />
      </a>
    </div>
  </div>
</div> */}


      <div className="AboutUs-quality-policy">
        <h2 className="AboutUs-quality-title">Quality Policy</h2>
        <p>e-con Systems&reg; designs, manufactures, and delivers quality products to its customers and strives consistently to excel through continual improvement.</p>
        <p>Our camera products provide lifetime support to your end applications with state-of-the-art manufacturing, design, and quality processes in place. We also extend a <a className="Aboutlink" href="https://www.e-consystems.com/warranty.asp"> 3-year warranty </a>period on all our camera products, which speaks for our commitment to ensuring product quality and standing by our customers.</p>
        <p>As an <a className="Aboutlink" href="https://www.e-consystems.com/pdf/iso-9001-2015-certificate.pdf">ISO 9001:2015 certified company,</a> e-con Systems&reg; is aware of the need for regulatory compliance with regards to its products sold globally. Please visit our <a className="Aboutlink" href="https://www.e-consystems.com/product-compliance-declaration.asp"> Product Compliance Declaration </a>for more details.</p>
        <p>Some of the certifications and quality standards e-con Systems&reg; follows include:</p>
        <div className="AboutUs-quality-icons">
          <img src={ce} alt="CE Certification" />
          <img src={fc} alt="FCC Certification" />
          <img src={rohs} alt="RoHS Certification" />
          <img src={tic} alt="TIC Certification" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
