import React from "react";
import { amounts, useDonationContext } from "../DonationContext";
import "./AmountSelection.scss";

export const AmountSelection = () => {
  const { onChangeValue, donationData, amountError, onAmountFocusEvent } =
    useDonationContext();

  return (
    <div className="form-columns-1">
      <div className="hs-form-field">
        <label className="hs-form-field-label">
          <span>Select An Amount</span>
        </label>
        {amountError && (
          <div className=" form__alert alert alert--error u-h6">
            {amountError}
          </div>
        )}
        <div className="input" onChange={onChangeValue}>
          <ul className="inputs-list multi-container">
            {amounts.map((item: number) => {
              return (
                <li className="hs-form-radio" key={`radio${item}`}>
                  <label className="hs-form-radio-display">
                    <input
                      className="hs-input"
                      type="radio"
                      value={item}
                      name={`donatedAmount`}
                      onFocus={onAmountFocusEvent}
                      checked={item.toString() === donationData.donatedAmount}
                      readOnly
                    />
                    <span className="hs-span">${item}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <legend className="hs-field-desc">
          or enter your desired contribution in the donation amount field
        </legend>
        <form>
          <fieldset className="df-payment-field">
            <div className="hs-form-field df-field">
              <label className="df-f-label">
                <span className="">Your Donation Amount</span>
              </label>
              <div className="input-group">
                <div className="input-group-icon">$</div>
                <div className="input-group-area">
                  <input
                    className="df-input"
                    value={donationData.donatedAmount}
                    onChange={onChangeValue}
                    type="number"
                    name={`donatedAmount`}
                    onFocus={onAmountFocusEvent}
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
