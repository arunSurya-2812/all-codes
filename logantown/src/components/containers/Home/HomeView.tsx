import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import Spinner from "../../common/Spinner/Spinner";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header.logic";
import { Banner } from "./Banner/Banner";
import Events from "./Events/Events";


export const HomeView = () => {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition === 0) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const scrollName = scrolling ? "homeview-inverted" : "homeview";

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={scrollName}>
          <Header />
          <Banner />
          <Events />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

export default HomeView;

