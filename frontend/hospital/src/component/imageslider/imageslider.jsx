import React, { useState, useEffect } from 'react';
import './image.css'; // Import your CSS file with styles if needed

const ImageSlider = () => {
  const imageNames = [
    'coronavirus-4914028_640.jpg',
    'hands-699486_640.jpg',
    'laboratory-563423_1280.jpg',
    'stethoscope-840125_640.jpg',
    'surgery-1807541_640.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePath = require(`../../images/${imageNames[currentImageIndex]}`);

  useEffect(() => {
    // Set up a timer to change the image every 3 seconds (adjust as needed)
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
    }, 4000); // Change image every 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }); // Run this effect only once on component mount

  

  return (
    <div >
      <img src={imagePath} alt={`Slide ${currentImageIndex}`} className='images' />
    </div>
  );
};

export default ImageSlider;
