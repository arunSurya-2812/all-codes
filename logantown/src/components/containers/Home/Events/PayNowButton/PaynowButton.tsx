import { PaypalButtons } from "../../../../common/PaypalButton/PayPalButton";
import { payment, useEventContext } from "../EventContext";
import "../../DonationForm/DonateNowButton/DonateNowButton.scss";
import StripeButton from "../../../../common/StripeButton/StripeButton";

export const PayNowButton = () => {
  const {
    registerAmountData,
    PaypalClick,
    eventDetails,
    paymentProps,
    validateUser,
  } = useEventContext();

  // const amount = eventDetails?.entry > 0 && `$${eventDetails.entry}`;
  // console.log("eventDetails", eventDetails);

  const getPaymentButton = (paymentType: string) =>
    ({
      [payment[0]]: (
        <PaypalButtons
          amount={eventDetails?.entry}
          PaymentSuccess={PaypalClick}
        />
      ),
      [payment[1]]: <StripeButton PaymentProps={paymentProps} />,
    }[paymentType]);

  if (!registerAmountData?.paymentMode) return <></>;

  const CustomButton =
    registerAmountData.paymentMode &&
    getPaymentButton(registerAmountData.paymentMode);

  return <div className="donate-button">{validateUser() && CustomButton}</div>;
};

export default PayNowButton;
