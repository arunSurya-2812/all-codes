import React from "react";
import "./Gifts.scss";
import GiftImg from "../../../../assets/image/GiftImg.png";
import PartnerImg from "../../../../assets/image/FeaturedPartner.png"

const Gifts = () => {
  return (
    <><div className="gifts-container">
      <p className="gifts-text">
        <span style={{ color: "#FFA700" }} className="gifts-text-header"> <b>CONFUSED IN GETTING GIFTS FOR YOUR KIDS</b></span> <br />{" "}
        <span className="gifts-text-subheader"><b>TRY MEME BOX & GET A SUPRISE EVERY MONTH</b></span>
      </p>
      <button className="knowmore__btn">
        <span >Know More</span>
      </button>
      {" "}
      <img className="giftsImg" src={GiftImg} />


    </div><img style={{ width: "100%", height: "auto" }} src={PartnerImg} /></>
  );
};

export default Gifts;
