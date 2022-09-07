import React from "react";
import "./Description.scss";
import ExclusiveIcon from "../../../../assets/image/ExclusiveIcon.svg";
import GiftBoxIcon from "../../../../assets/image/GiftBoxIcon.svg";
import HeartIcon from "../../../../assets/image/HeartIcon.svg";

const Description = () => {
  return (
    <div className="description-container">
      <div>
        <img className= 'description-icons' src={ExclusiveIcon} />
        EXCLUSIVE MeMeBox{" "}
      </div>
      <div>
        {" "}
        <img className= 'description-icons' src={GiftBoxIcon} />
        A SURPRISE EVERY
        <br /> MONTH
      </div>
      <div>
        <img className= 'description-icons' src={HeartIcon} />
        EXCLUSIVE MeMeBox
      </div>
    </div>
  );
};

export default Description;
