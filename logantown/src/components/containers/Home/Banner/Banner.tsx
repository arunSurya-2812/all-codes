import "./Banner.scss";
import logo from "../../../../assets/image/Banner/bgimg.png"

export const Banner = () => {
  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <img src={logo} style={{width:"100%",}} />
      </div>
      {/* <div className="homepage-center-promo">
        <h1 className="homepage-center-promo-head">
          TRAVEL WITH <br /> ROCKROCK
        </h1>
        <span className="homepage-center-promo-content u-h3">
          NEVER.STOP.EXPLORING
        </span>
      </div> */}
    </div>
  );
};
