import React, { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  validateEmailId,
  validateMobileNumber,
  validateName,
} from "../../../UserAccount/Script";
import { IBooking } from "../../../stateContainers/Events/Service";
import { AddBooking } from "../../../stateContainers/Events/ThunkAction";
import { Countries } from "../../../common/json/Countries";
import { onChange } from "../../../../constant/Types";

export const EventContext = createContext({});

export interface IEvents {
  name: string;
  email: string;
  uPhone: string;
  tnxid: any;
}
export interface IRegisterData {
  Amount: number;
  paymentMode: string | null;
}
export const payment = ["Paypal", "Stripe"];

const initialState = {
  Amount: 0,
  paymentMode: null,
};

const IntialEventRegister: IEvents = {
  name: "",
  email: "",
  uPhone: "",
  tnxid: "",
};

export const EventContextProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const [eventRegister, setEventRegister] =
    React.useState<IEvents>(IntialEventRegister);
  const [registerAmountData, setRegisterAmountData] =
    useState<IRegisterData>(initialState);
  const [userError, setUserError] = React.useState<string>("");
  const [amountError, setAmountError] = React.useState<string>("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState<
    string | undefined
  >("");

  const [eventDetails, setEventDetails] = React.useState<any>(null);

  const onChangeValue = (event: onChange) => {
    const value = event.target.value;
    const name = event.target.name;
    setRegisterAmountData({
      ...registerAmountData,
      [name]: value,
    } as IRegisterData);
  };

  const onRegister = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setEventRegister({ ...eventRegister, [name]: value });
  };

  const onRegisterFocusEvent = () => {
    setUserError("");
  };

  React.useEffect(() => {
    if (userError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setUserError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userError]);

  const onAmountFocusEvent = () => {
    setAmountError("");
  };

  React.useEffect(() => {
    if (amountError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setAmountError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [amountError]);

  React.useEffect(() => {
    const regionList = Countries.find(
      (item: any, index) => item.name === selectedCountry
    );
    setSelectedRegion(regionList?.dialCode);
  }, [selectedCountry]);

  const validateUser = () => {
    let fields = eventRegister;
    let errors = "";
    let formIsValid = true;
    const isValidName = validateName(fields.name, "name");
    const isValidEmailId = validateEmailId(fields.email);
    const isValidMobileNumber = validateMobileNumber(fields.uPhone);

    if (formIsValid && !isValidName.formIsValid) {
      errors = isValidName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidEmailId.formIsValid) {
      errors = isValidEmailId.error;
      formIsValid = false;
    } else if (formIsValid && !isValidMobileNumber.formIsValid) {
      errors = isValidMobileNumber.error;
      formIsValid = false;
    } else {
      errors = "";
      formIsValid = true;
    }
    setUserError(errors);
    return formIsValid;
  };

  const registrationDetails: IBooking = {
    name: eventRegister.name,
    mail: eventRegister.email,
    mobile: eventRegister.uPhone,
    tnxid: eventRegister.tnxid,
  };

  const PaymentSuccess = (tnxid?: string) => {
    const data = { ...eventDetails, ...registrationDetails, tnxid };
    dispatch(AddBooking(data));
    console.log("click");
  };

  const paymentProps = {
    name: eventRegister.name,
    amount: +eventDetails?.entry as number,
    email: eventRegister.email,
    phoneNo: eventRegister.uPhone,
    onSuccess: PaymentSuccess,
  };

  const PaypalClick = (tnxid?: string) => {
    if (validateUser() && tnxid) {
      PaymentSuccess(tnxid);
    }
  };

  return (
    <EventContext.Provider
      value={
        {
          registerAmountData,
          onChangeValue,
          onRegister,
          eventRegister,
          onRegisterFocusEvent,
          userError,
          amountError,
          onAmountFocusEvent,
          selectedCountry,
          Countries,
          selectedRegion,
          PaypalClick,
          setEventDetails,
          eventDetails,
          paymentProps,
          validateUser,
        } as any
      }
    >
      {children}
    </EventContext.Provider>
  );
};

export function useEventContext() {
  const {
    registerAmountData,
    onChangeValue,
    onRegister,
    eventRegister,
    onRegisterFocusEvent,
    userError,
    RegisterNowClick,
    amountError,
    onAmountFocusEvent,
    selectedCountry,
    Countries,
    selectedRegion,
    PaypalClick,
    setEventDetails,
    eventDetails,
    paymentProps,
    validateUser,
  } = useContext(EventContext) as any;
  return {
    registerAmountData,
    onChangeValue,
    onRegister,
    eventRegister,
    onRegisterFocusEvent,
    userError,
    RegisterNowClick,
    amountError,
    onAmountFocusEvent,
    selectedCountry,
    Countries,
    selectedRegion,
    PaypalClick,
    setEventDetails,
    eventDetails,
    paymentProps,
    validateUser,
  };
}
