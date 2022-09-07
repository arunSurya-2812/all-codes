import React from "react";
import Header from "../../../header/Header.logic";
import { AmountSelection } from "./AmountSelection/AmountSelection";
import { DonateBanner } from "./DonateBanner/DonateBanner";
import DonateNowButton from "./DonateNowButton/DonateNowButton";
import { DonateContextProvider } from "./DonationContext";
import "./DonationForm.scss";
import { PaymentSelection } from "./PaymentSelection/PaymentSelection";
import { UserInfo } from "./UserInfo/UserInfo";

export const DonationForm = () => {
  return (
    <DonateContextProvider>
      <React.Fragment>
        <Header />
        <DonateBanner />
        <div className="column_content wide_left sticky_none ">
          <div className="column_content__col">
            <div id="df-card-container" className="df-main">
              <form>
                <AmountSelection />
                <PaymentSelection />
                <UserInfo />
                <DonateNowButton />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    </DonateContextProvider>
  );
};
