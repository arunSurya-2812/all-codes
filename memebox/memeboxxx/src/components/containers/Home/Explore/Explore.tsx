import React from "react";
import "./Explore.scss";
import ExploreImg from "../../../../assets/image/ExploreImg.png";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  let navigate=useNavigate()
  return (
    <div className="explore-container">
      <img className="explore-img" src={ExploreImg} />
      
      <button className="exploreBtn">
        <span className="exploreText" onClick={()=>navigate("/Subscribebox")}>Explore</span>
      </button>
    </div>
  );
};

export default Explore;
