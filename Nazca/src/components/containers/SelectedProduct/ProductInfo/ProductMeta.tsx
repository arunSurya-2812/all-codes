import React from "react";
import { getOfferPrice, MoneyFormater } from "../../../common/Script";
import { useSelProduct } from "../useSelProduct.hook";
import { ProductMetaTimer } from "./Timer";

export const ProductMeta = () => {
  const { productDetails, updatedProduct, isPastDate } = useSelProduct();
  const {
    productname,
    offer,
    date: endDate,
    descpription,
    fabric,
  } = productDetails;
  const price = (updatedProduct?.price as number) || 0;

  return (
    <div className="ProductMeta">
      <h1 className="ProductMeta__Title u-h4">{productname}</h1>

      <div className="ProductMeta__PriceList u-h4">
        <span className="ProductMeta__Price Price Price--highlight">
          {MoneyFormater(+getOfferPrice(price, offer))}
        </span>
        {offer !== 0 && (
          <span className="ProductMeta__Price Price Price--compareAt Text--subdued">
            {MoneyFormater(price)}
          </span>
        )}

        {offer !== 0 && (
          <span className="Price--offer Price--highlight">({offer}% OFF)</span>
        )}
      </div>
      <div className="ProductMeta__Description">
        <ul>
          <li>{descpription && descpription}</li>
          {fabric && <li>Fabric : {fabric}</li>}
        </ul>
      </div>

      {!isPastDate && endDate && <ProductMetaTimer endDate={endDate} />}
    </div>
  );
};
