import "./Review.scss";
// import "../Offers/Offers.scss";
import { Card_Array } from "../../../../constant/Variables";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ICarousel } from "../../../../model/ISliderType";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";

import Slider from "react-slick";

const Review = () => {
  const { sliderData } = useSelector((state: IRootState) => state);
  const carousel = Card_Array.map((e: any) => {
    return e;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(carousel?.length);

  useEffect(() => {
    setLength(carousel?.length);
  }, [carousel]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  //Automatic Carousel Slide Change
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
      console.log(currentIndex);
    }, 5000);
    return () => clearInterval(interval);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="review-card-container">
      <Slider {...settings}>
        {carousel?.map((slide: any, index: number) => (
          <div key={index} style={{ marginLeft: "56px" }}>
            <div className="review-card card-1">
              <div className="review-card-img"></div>
              <a href="" className="card-link">
                <div className="review-card-img-hovered">
                  <img src={slide.url} />
                </div>
              </a>
              <div className="review-card-info">
                <h1 className="review-card-title">
                  <a href="">john</a>
                </h1>
                <div className="review-card-creator">{slide.about}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
