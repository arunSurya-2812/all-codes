import { useRef } from "react";
import { Accordion } from "./Accordian/Accordian";
import DeliveryDetails from "./Accordian/DeliveryDetails";
import { ProductMeta } from "./ProductMeta";
import ProductVarients from "./ProductVarients";

function ProductInfo() {
  const myRef = useRef(null) as any;

  return (
    <div className="Product__InfoWrapper">
      <div ref={myRef} className="Product__Info " style={{ top: "-100px" }}>
        <div className="Container">
          <ProductMeta />
          <ProductVarients />
          <div className="accordian-group">
            <Accordion title="Check Delivery" childComp={<DeliveryDetails />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
