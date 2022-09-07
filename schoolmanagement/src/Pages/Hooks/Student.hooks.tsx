import axios from "axios";

import React from "react";
import { IStudentInputs } from "../../Variable/Types";
export default function Studenthooks() {
  const initialStudentCredentials: IStudentInputs = {
    name: undefined,
    email: undefined,
    mobile: undefined,
    dob: undefined,
    bloodgroup: undefined,
    fathername: undefined,
    mothername: undefined,
    address: undefined,
    studentphoto: undefined,
    coursename: undefined,
    staff: undefined,
  };

  const [StudentCredentials, setStudentCredentials] =
    React.useState<IStudentInputs>(initialStudentCredentials);
  const [error, showError] = React.useState() as any;
  const [studentcouserName, setStudentcouserName] = React.useState<any>([]);
  const [staffdatas, setStaffDatas] = React.useState<any>();

  React.useEffect(() => {
    if (error === "") {
      return;
    }
    const timer = setTimeout(() => {
      showError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const FetchCouserForStudent = async () => {
    await axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/course")
      .then((res: any) => {
        setStudentcouserName(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const handleStudentFormChange = (e: any) => {
    e.preventDefault();

    const name = e.target.name;

    if (name === "studentphoto ") {
      const value = e.target.files[0];
      setStudentCredentials({ ...StudentCredentials, [name]: value });
      setStaffDatas(value);
    } else {
      const value = e.target.value;
      setStudentCredentials({ ...StudentCredentials, [name]: value });

      setStaffDatas(value);
    }
  };

  console.log(StudentCredentials, "StudentCredentials");

  const handleStudentFormValidate = () => {
    let fields = StudentCredentials;
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

  const OnSubmitForm = async (e: any, StudentCredentials: any) => {
    e.preventDefault();
    if (handleStudentFormValidate()) {
      await axios
        .post(
          "https://61ef7787732d93001778e3c3.mockapi.io/student",
          StudentCredentials
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
    StudentCredentials,
    handleStudentFormChange,
    OnSubmitForm,
    error,
    staffdatas,
    FetchCouserForStudent,
    studentcouserName,
  };
}
