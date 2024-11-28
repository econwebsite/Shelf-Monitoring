import React from "react";
import "./AboutUs.css";
import aboutus from "../../assets/homepage/about-us.png";
import ce from "../../assets/homepage/certificates-01.png";
import fc from "../../assets/homepage/certificates-02.png";
import rohs from "../../assets/homepage/certificates-03.png";
import tic from "../../assets/homepage/certificates-04.png";
import banner from "../../assets/homepage/cesevents.jpg"; // Add your banner image here

const AboutUs = () => {
  return (
    <div className="AboutUs-container">
      {/* Main Section */}
      <h1 className="AboutUs-title">About e-con Systems</h1>
      <div className="AboutUs-section">
        {/* Left Column */}
        <div className="AboutUs-left">
          <img src={aboutus} alt="About Us" className="AboutUs-img" />
        </div>

        {/* Right Column */}
        <div className="AboutUs-right">
          <p>
            Established in 2003, e-con Systems has grown into a leading OEM camera solution provider with a wide global footprint. We provide end-to-end camera solutions like MIPI cameras, GMSL cameras, USB 3.1 Gen 1 cameras, stereo cameras, Time of Flight cameras, GigE cameras, and more. Over the years, we have reimagined how they are used in applications such as retail, medical, industrial, agriculture, smart city, etc.
          </p>
          <p>
            We are also powered by a strong partner ecosystem, providing end-to-end vision solutions with sensor partners, ISP partners, carrier board partners, and more.
          </p>
          <p>
            So far, we have built 350+ product solutions - shipping over 2 million cameras to the United States, Europe, Japan, South Korea, and many more countries.
          </p>
          <p>
            To know more about e-con Systems{" "}
            <span className="quality-col">
              <a href="https://www.e-consystems.com/aboutus.asp" target="_blank" rel="noopener noreferrer">
                click here
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="AboutUs-banner">
      <a href="https://www.e-consystems.com/events/ces-2025.asp">  <img src={banner} alt="About Us Banner" className="AboutUs-banner-img" /></a>
      </div>

      {/* Quality Policy Section */}
      <div className="AboutUs-quality-policy">
        <h2 className="AboutUs-quality-title">Quality Policy</h2>
        <p>
          e-con Systems&reg; designs, manufactures, and delivers quality products to its customers and strives consistently to excel through continual improvement.
        </p>
        <p>
          We are also powered by a strong partner ecosystem, providing end-to-end vision solutions with sensor partners, ISP partners, carrier board partners, and more.
        </p>
        <p>
          So far, we have built 350+ product solutions - shipping over 2 million cameras to the United States, Europe, Japan, South Korea, and many more countries.
        </p>
        <p>
          To know more about e-con Systems{" "}
          <span className="quality-col">
            <a href="https://www.e-consystems.com/aboutus.asp" target="_blank" rel="noopener noreferrer">
              click here
            </a>
          </span>
        </p>
      </div>

      {/* Icons Section */}
      <div className="AboutUs-icons">
        <div className="AboutUs-icon-box">
          <img src={ce} alt="CE Certification" />
        </div>
        <div className="AboutUs-icon-box">
          <img src={fc} alt="FCC Certification" />
        </div>
        <div className="AboutUs-icon-box">
          <img src={rohs} alt="RoHS Certification" />
        </div>
        <div className="AboutUs-icon-box">
          <img src={tic} alt="TIC Certification" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
