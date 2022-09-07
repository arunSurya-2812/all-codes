import React from "react";
import { payment,useEventContext } from "../EventContext";
import "../../DonationForm/PaymentSelection/PaymentSelection.scss";

export const PaymentSelection = () => {
  const { registerAmountData, onChangeValue } = useEventContext();
  return (
    <fieldset>
      <div className="df-form-head">
        <p>Payment Method</p>
      </div>
      <ul className="pay-inputs-list" onChange={onChangeValue as any}>
        {payment.map((item: string) => {
          return (
            <li className="pay-form-radio" key={item}>
              <label className="pay-form-radio-display">
                <input
                  type="radio"
                  className="df-payment-input"
                  value={item}
                  name={`paymentMode`}
                  checked={item === registerAmountData.paymentMode}
                  readOnly
                />
                <span className="df-payment-span">{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};
