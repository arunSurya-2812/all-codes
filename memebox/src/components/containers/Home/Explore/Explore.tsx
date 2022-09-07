import React from "react";
import "./Explore.scss";
import ExploreImg from "../../../../assets/image/ExploreImg.png";

const Explore = () => {
  return (
    <div className="explore-container">
      <img className="explore-img" src={ExploreImg} />
      
      <button className="exploreBtn">
        <span className="exploreText">Explore</span>
      </button>
    </div>
  );
};

export default Explore;
