import { useSelector } from "react-redux";
import Slider from "react-slick";
import { ICarousel } from "../../../../model/ISliderType";
import { IRootState } from "../../../../redux/reducer/CombineReducer";

export const Banner = () => {
  const { sliderData } = useSelector((state: IRootState) => state);
  const carousel = sliderData && sliderData.Sliders.carousel;

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {carousel?.map((slide: ICarousel) => (
          <img key={slide.banId} src={slide.bannerUrl} alt="Slider-Img" />
        ))}
      </Slider>
    </div>
  );
};
