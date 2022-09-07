import { CartSummary } from "./CartSummary/CartSummary";
import { CartTable } from "./CartTable/CartTable";
import { useCart } from "./useCart.hook";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../common/EmptyCart/EmptyCart";
import Spinner from "../../common/Spinner/Spinner";
import Stepper from "../Stepper/Stepper";
import "./Cart.scss";
import Footer from "../../Footer/Footer";

export const Cart = () => {
  const { viewCart } = useCart();

  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;
  
// const x=viewCart.cartItem?.find((e:any)=>e.productInfo.imageurl === "https://mylogantown.s3.amazonaws.com/mememove/MEMEBOX.png")
// console.log(x,"bjbhjbj")
  return (
    <div className="ccolumns">
      <div className="ccolumn main">
        <Stepper activeIndex={0} />
        {isLoading ? (
          <Spinner />
        ) : viewCart && viewCart?.cartItem?.length > 0 ? (
          <div className="cart-container">
            <CartSummary items={viewCart} />
            <div className="cart-page-title u-h4">
              IN MY BAG
              <span className="cart-count u-h4">{`( ${viewCart.cartItem?.length} items )`}</span>
            </div>
            {/* {
              x?undefined: */}
            
            <CartTable cartItems={viewCart.cartItem } />
          {/* } */}
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
