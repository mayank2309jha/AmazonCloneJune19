import React from "react";
import "../styles/Banner.css";
import { useState } from "react";
import {useEffect} from "react";
import imageLinks from "../data/BannerImageLinks";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Banner = () => {
  let [index, setIndex] = useState(0);
  const lengthOfImageArray = imageLinks.length;

  const nextImage = () => {
    setIndex(index === lengthOfImageArray - 1 ? 0 : index + 1);
  };
  const prevImage = () => {
    setIndex(index === 0 ? lengthOfImageArray - 1 : index - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex(index === lengthOfImageArray - 1 ? 0 : index + 1);
    }, 5000);

    return () => clearInterval(interval);
  });


  return (
    <div className="carousel">
      <div className="banner">
        <FaArrowAltCircleLeft
          className="carousel-button prev"
          onClick={prevImage}
        />
        <img alt = "banner_image" src = {imageLinks[index]} className = "image"/>
        <FaArrowAltCircleRight
          className="carousel-button next"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Banner;