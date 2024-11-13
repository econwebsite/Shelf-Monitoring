import React, { useState } from 'react';
import AnimationButton from './AnimationButton'; // Import AnimationButton
import "./Modelbutton.css";
import Modelform from './Modelform';

const Modelbutton = ({
  text = 'Contact Us',
  backgroundColor = '#344ea1',        // Main button color
  textColor = '#def9fc',               // Button text color
  hoverBackgroundColor = '#def9fc',    // Hover background color
  hoverTextColor = '#344ea1',          // Hover text color
  className = '',
  productName = null,
  docName = null,
  title = null,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <AnimationButton
        text={text}
        backgroundColor={backgroundColor}        // Set background color for button
        textColor={textColor}                    // Set text color for button
        hoverBackgroundColor={hoverBackgroundColor}  // Set hover background color
        hoverTextColor={hoverTextColor}          // Set hover text color
        className={`newanimation ${className}`}
        onClick={showModal}
      />

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
        type={text === 'Contact Us' ? `contact` : `download`}
        productName={productName || null}
        docName={docName || null}
        title={title || null}
      />
    </div>
  );
};

export default Modelbutton;
