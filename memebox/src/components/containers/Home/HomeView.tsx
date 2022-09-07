import React from "react";
import { Banner } from "./Banner/Banner";
import { Slider } from "./Sliders/Slider";
import Spinner from "../../common/Spinner/Spinner";
import { Categories } from "./Categories/Categories";
import useProductList from "../ProductList/useProductList.hook";
import { ShopByCollections } from "../ShopBy/ShopByCollections";
import "./Style.scss";
import Description from "./Description/Description";
import Offers from "./Offers/Offers";
import Gifts from "./Gifts/Gifts";
import Review from "./Review/Review";
import Referal from "./Referal/Referal";
import Partners from "./Partners/Partners";
import Explore from "./Explore/Explore";

export const HomeView = () => {
  const { isLoading } = useProductList();

  return (
    <React.Fragment>
      <div></div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Banner />
         
          <Description />
          <Slider />
          {/* <Offers /> */}
           <Review />
           <Gifts />
          {/*<Partners />*/}
          <Explore />
          <Referal /> 
         
         {/*  <Categories title="ShopBy Categories" />
          <Categories>
            <ShopByCollections />
          </Categories> */}
        </>
      )}
    </React.Fragment>
  );
};

export default HomeView;
