import React from "react";
import axios from "axios";
import { useState } from "react";
import { IStaffInputs } from "../../Variable/Types";

export default function Staffhooks() {
  const initialStaffrCredentials: IStaffInputs = {
    name: undefined,
    email: undefined,
    mobile: undefined,
    dob: undefined,
  };

  const [course, setCourse] = React.useState([]);

  const [StaffCredentials, setStaffCredentials] = React.useState<IStaffInputs>(
    initialStaffrCredentials
  );

  const [error, showError] = useState() as any;
  React.useEffect(() => {
    if (error === "") {
      return;
    }
    const timer = setTimeout(() => {
      showError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleStaffFormValidate = () => {
    let fields = StaffCredentials;
    let errors = "";
    let formIsValid = true;

    Object.entries(fields).map(([key, value]) => {
      if (formIsValid && !value) {
        formIsValid = false;
        errors = `Please enter valid ${key}`;
      }
    });

    showError(errors);
    return formIsValid;
  };

  const handleStaffFormChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setStaffCredentials({ ...StaffCredentials, [name]: value });
    
  };

  const OnSubmitForm = async (StaffCredentials: any) => {
    if (handleStaffFormValidate()) {
      await axios
        .post(
          "https://61ef7787732d93001778e3c3.mockapi.io/Staff",
          StaffCredentials
        )
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };
  return {
    handleStaffFormChange,
    course,
    StaffCredentials,
    error,
    OnSubmitForm,
  };
}
