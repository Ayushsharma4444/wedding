import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackgroundImageInterval = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.postimg.cc/qMBszQXy/namanverma.jpg",
    "https://i.postimg.cc/rFhSWWQb/new-Project.jpg",
  ]; // Replace with your image URLs
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = images[currentImage];
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isImageLoaded) {
    return null; // Render null or a loading spinner while the image is being loaded
  }

  return (
    <div className="background-image-container">
      <div className="fade-transition">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`background-image ${
              index === currentImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ))}
      </div>
      <div className="main-div">
        <div className="sub-div">
          <h3 className="sub-heading">D'NOIRE</h3>
          {/* <button className="sub-button" type="submit"> */}
            
          <Link to="/home" class="border-orange-700 sub-button block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Enter</Link>
          {/* </button> */}

        </div>
      </div>
    </div>
  );
};

export default BackgroundImageInterval;
