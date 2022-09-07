import React from "react";
import AboutUs from "../../../../assets/image/Banner/AboutUs.jpg";

export const AboutUsBanner = () => {
  return (
    <div className="hp_image_with_text">
      <div className="hp_text-wrapper">
        <h2 className="u-h1">About Our Products</h2>

        <p>
          The All-rounder is for paddlers who want a paddleboard that travels
          light & provides rigid stability for the whole family. Ideal for SUP
          newcomers & versatile use, with a stable shape & excellent balance.
        </p>
        <span>Read More</span>
      </div>
      <div className="hp_image-wrapper">
        <img src={AboutUs} alt="banner" />
      </div>
    </div>
  );
};
