import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../common/Spinner/Spinner";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import { getProduct } from "../../stateContainers/SelectedProduct/ThunkAction";
import { ModalEnum } from "../../stateContainers/SelectedProduct/Types";
import { PopupContainer } from "./PopupContainer/PopupContainer";
import { useSelProduct } from "./useSelProduct.hook";
import { ProductDescription } from "./ProductInfo/ProductDescription";
import "./SelectedProduct.scss";
// import { Helmet } from "react-helmet";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import EmptyProducts from "../../common/EmptyProducts/EmptyProducts";

export const SelectedProduct = () => {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;
  const { selectedProduct, modalVisibility } = useSelProduct();
  // const metaTags = (productDetails?.metatags && productDetails?.metatags) || [];
  const dispatch = useDispatch();
  const { id } = useParams() as any;
  localStorage.removeItem("selected-category");

  const mcid = selectedProduct?.productDetails?.mcId;
  const isEqualProductId = id.toString() === mcid?.toString();

  useEffect(() => {
    if (!isEqualProductId) {
      dispatch(getProduct({ pId: id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {Object.entries(selectedProduct?.productDetails).length ? (
        <section className="Product Product--large">
          <div className="ProductDetails__Container">
            <ProductGallery />
            <ProductInfo />
          </div>
          {modalVisibility !== ModalEnum.Empty && <PopupContainer />}
          <ProductDescription classname="hidden-lap-and-up" />
        </section>
      ) : (
        <EmptyProducts />
      )}
    </>
  );
};

export default SelectedProduct;
