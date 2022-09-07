import React from "react";
import { monthNames } from "../../../../constant/Variables";
import { DeliveryBusIcon } from "../../../common/Icons";
import { useSelProduct } from "../useSelProduct.hook";

interface IProps {
  classname: string;
}

export const ProductDescription: React.FC<IProps> = (props: IProps) => {
  const { classname } = props;
  const { productDetails, selectedProduct } = useSelProduct();

  const { deliveryTime, date } = productDetails;
  const time = deliveryTime ? deliveryTime : "3-21";

  const currentDate = new Date();
  let someDate =
    selectedProduct.from === "preorder" ? new Date(date) : new Date();

  var numberOfDaysToAdd = parseInt(deliveryTime);
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  const minExpectedDate = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getDate()}`;

  const maxExpectedDate = `${
    monthNames[someDate.getMonth()]
  } ${someDate.getDate()}`;

  const Delivery = () => {
    return (
      <div style={{ padding: "20px  0px" }}>
        <div>
          {` Products are generally dispatched in ${time} days depending upon the
          product you have ordered.`}
        </div>
        <div className="Product__Delivery u-h41">
          <span className="Product__Delivery__Bus">
            <DeliveryBusIcon />
          </span>
          Delivered between {minExpectedDate} - {maxExpectedDate}
        </div>
      </div>
    );
  };

  const layoutData = [
    {
      head: "Delivery",
      component: <Delivery />,
    },
  ];

  return (
    <React.Fragment>
      {layoutData.map((item: any, index: number) => (
        <div
          key={index}
          id="tsp_tab_products"
          className={`Container product-collateral clearfix ${classname}`}
        >
          <ul className="nav-tabs u-h6">
            <li className="active">
              <span data-toggle="tab">{item.head}</span>
            </li>
          </ul>
          <div className="tab-content">
            <section className="active">{item.component}</section>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
