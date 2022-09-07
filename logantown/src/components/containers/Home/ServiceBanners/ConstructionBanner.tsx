import React from "react";
const vPath = require("../../../../assets/image/Banner/Construction.mp4");

export const ConstructionBanner = () => {
  return (
    <div className="hp_image_with_text">
      <div className="hp_image-wrapper">
        <video autoPlay loop muted controls className="hp_image-wrapper-vdo">
          <source src={vPath.default} type="video/mp4" />
        </video>
      </div>
      <div className="hp_text-wrapper mt">
        <h2 className="u-h1">CONSTRUCTION</h2>

        <p>
          As mentioned a trend of great concern is manufacturers implying the
          use of fusion materials on boards that are actually made of single
          layer fabric. Some creative layer-counting takes place for the sake of
          advertising, so read construction claims critically. A common practice
          is to count adhesives or coatings as 'layers, which muddies the waters
          quite a bit with regard to the actual composition of the materials
          used.
        </p>
        <span>Read More</span>
      </div>
    </div>
  );
};
