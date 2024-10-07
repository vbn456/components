import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Step 1: Declare array of objects with id and image URL
  const images = [
    { id: 1, url: 'https://via.placeholder.com/600x300?text=Image+1' },
    { id: 2, url: 'https://via.placeholder.com/600x300?text=Image+2' },
    { id: 3, url: 'https://via.placeholder.com/600x300?text=Image+3' },
    { id: 4, url: 'https://via.placeholder.com/600x300?text=Image+4' },
  ];

  // Step 2: State to manage active image index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to set the active image based on clicked circle
  const selectImage = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <h1>Image Slider</h1>
      {/* Displaying the active image */}
      <div className="image-container">
        <img src={images[activeIndex].url} alt={`Image ${activeIndex + 1}`} />
      </div>
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={prevImage} className="nav-button">Previous</button>
        <button onClick={nextImage} className="nav-button">Next</button>
      </div>
      {/* Option Circles */}
      <div className="option-circles">
        {images.map((image, index) => (
          <span
            key={image.id}
            className={`circle ${activeIndex === index ? 'active' : ''}`}
            onClick={() => selectImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
