import React, { useState } from "react";
import Stepper from "../Stepper/Stepper";
import { AddressList } from "./AddressList/AddressList";
import "./Address.scss";
import OrderSummary from "./OrderSummary/OrderSummary";
import { useAddress } from "./useAddress.hook";
import { useCart } from "../Cart/useCart.hook";
import { AddressForm } from "./AddressForm/AddressForm";
import Footer from "../../Footer/Footer";
import { Box } from "@material-ui/core";

export const Address = () => {
  const { fetchAddreses, openUpdateView, toggleUpdateView } = useAddress();
  const { viewCart, FetchCartData } = useCart();
  const [boxdata,setBoxdata]=useState({}) as any;
  // const x = viewCart.cartItem?.find(
  //   (e: any) =>
  //     e.productInfo.imageurl ===
  //     "https://mylogantown.s3.amazonaws.com/mememove/MEMEBOX.png"
  // );
  // console.log(x, "bjbhjbj");

  React.useEffect(() => {
    fetchAddreses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   
  }, []);

  React.useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem('box') || '{}');
 
setBoxdata(currentUser)
    if (Object.entries(viewCart).length < 1 || boxdata ) {
      FetchCartData();
    } else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log(boxdata)
  const TopBar = () => {
    return (
      <div className="opc-estimated-wrapper u-h5">
        <div className="estimated-block">
          <span className="estimated-label u-h4">Estimated Total</span>
          <span className="estimated-price">
            RS. {viewCart.totalPrice && viewCart.totalPrice.toFixed() || boxdata.boxprice}
          </span>
        </div>
        <div className="minicart-bag">
          <button type="button" className="action showcart">
            <span className="counter qty">
              <span className="counter-number u-h6">
                {viewCart.cartItem?.length}
              </span>
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="acolumn">
      <div className="acolumn main">
        <Stepper activeIndex={1} />

        <>
          {openUpdateView ? (
            <AddressForm toggleUpdateView={toggleUpdateView} />
          ) : (
            <div id="checkout" className="checkout-container">
              <TopBar />
              <AddressList toggleUpdateView={toggleUpdateView} />
             <OrderSummary />
            </div>
          )}
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
