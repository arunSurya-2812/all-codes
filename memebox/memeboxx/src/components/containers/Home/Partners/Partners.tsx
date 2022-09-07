import React from "react";
import "./Partners.scss";
import HarryPotterImg from "../../../../assets/image/HarryPotterImg.png" 

const Partners = () => {
  return (
    <div className="partners-container">
      <p className="partners-header">OUR FEATURED PARTNERS</p>
      <div>
        <img src={HarryPotterImg}/>
      </div>
    </div>
  );
};

export default Partners;
