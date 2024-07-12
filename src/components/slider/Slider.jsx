import React, { useState } from "react";
import style from "./Slider.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Slider = ({ sliderNews }) => {
  console.log(sliderNews);
  const [current, setCurrent] = useState(0);

  const length = sliderNews.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderNews) || length <= 0) {
    return null;
  }
  return (
    <div className={style.slider}>
      <FaArrowCircleLeft className={style.left} onClick={prevSlide} />
      <FaArrowCircleRight className={style.right} onClick={nextSlide} />
      {sliderNews?.map((items, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className={style.container}>
                <img
                  src={items?.urlToImage}
                  alt="images"
                  className={style.image}
                />
                <h3>{items?.title}</h3>
                <div className={style?.link}>
                  <a href={items?.url}>Detail</a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
