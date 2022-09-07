import React, { useEffect } from "react";
import { registerInput } from "../../../../../constant/Types";
import { useEventContext } from "../EventContext";

export const EventUserForm = (props: any) => {
  const { details } = props;
  const {
    eventRegister,
    onRegister,
    onRegisterFocusEvent,
    userError,
    setEventDetails,
  } = useEventContext();

  useEffect(() => {
    setEventDetails(details);
  }, [details]);

  const inputs: registerInput[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      text: "Name",
      value: eventRegister.name,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      text: "Email",
      value: eventRegister.email,
    },
    {
      id: 3,
      name: "uPhone",
      type: "number",
      text: "Mobile number",
      value: eventRegister.uPhone,
    },
  ];

  const getInputText = () => {
    return inputs.map((item: registerInput) => {
      return (
        <React.Fragment key={item.id}>
          <div className="donation--form__item">
            <input
              type={item.type}
              id={item.name}
              name={item.name}
              aria-label={item.text}
              value={item.value}
              placeholder={item.text}
              className="donation--form__input u-h4"
              autoFocus={false}
              onChange={onRegister}
              onFocus={onRegisterFocusEvent}
            />
            <label className="donation__floating--label u-h4">
              {item.text}
            </label>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <fieldset>
      <div className="df-form-head">
        <p>Register Info</p>
      </div>
      {userError && (
        <div className=" form__alert alert alert--error u-h6">{userError}</div>
      )}
      <div className="df-form-body">{getInputText()}</div>
    </fieldset>
  );
};
