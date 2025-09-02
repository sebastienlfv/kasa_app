import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./slider.scss";

interface SliderProps {
  pictures: string[];
}

const Slider: React.FC<SliderProps> = ({ pictures }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider-container">
      <img
        src={pictures[current]}
        alt={`slide-${current}`}
        className="slider-img"
      />
      {pictures.length > 1 && (
        <>
          <button className="slider-arrow left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slider-arrow right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <span className="slider-count">
            {current + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Slider;
