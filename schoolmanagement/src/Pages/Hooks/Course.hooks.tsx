import axios from "axios";
import React from "react";
import { ICourseInputs } from "../../Variable/Types";

export default function Coursehooks() {
  const initialCourseCredentials: ICourseInputs = {
    coursename: undefined,
    staffName: undefined,
  };

  const [CourseCredentials, setCourseCredentials] =
    React.useState<ICourseInputs>(initialCourseCredentials);
  const [error, showError] = React.useState() as any;
  const [staffsname, setStaffname] = React.useState<any>([]);

  React.useEffect(() => {
    if (error === "") {
      return;
    }
    const timer = setTimeout(() => {
      showError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const FetchStaffName = async () => {
    await axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
      .then((res: any) => {
        setStaffname(res.data);
       
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const handleCourseormChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setCourseCredentials({ ...CourseCredentials, [name]: value });

  };
  const handleCourseFormValidate = () => {
    let fields = CourseCredentials;
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
  const OnSubmitForm = async (CourseCredentials: any) => {
    if (handleCourseFormValidate()) {
      await axios
        .post(
          "https://61ef7787732d93001778e3c3.mockapi.io/course",
          CourseCredentials
        )
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
    console.log(CourseCredentials);
  };
  return {
    CourseCredentials,
    handleCourseormChange,
    OnSubmitForm,
    error,
    staffsname,
    FetchStaffName,
  };
}
