import React from "react";
import { initialInput } from "../Variable/Types";
import { Form, Button } from "react-bootstrap";
import Studenthooks from "./Hooks/Student.hooks";

export default function StudentForm() {
  const [staffname, setStaffName] = React.useState<any>(null);
  const {
    StudentCredentials,
    handleStudentFormChange,
    error,
    staffdatas,
    OnSubmitForm,
    studentcouserName,
    FetchCouserForStudent,
  } = Studenthooks();

  React.useEffect(() => {
    FetchCouserForStudent();
  }, []);

  const Studentinputs: initialInput[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      text: "name",
      value: StudentCredentials.name,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      text: "email",
      value: StudentCredentials.email,
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      text: "dob",
      value: StudentCredentials.dob,
    },
    {
      id: 4,
      name: "fathername",
      type: "text",
      text: "fathername",
      value: StudentCredentials.fathername,
    },
    {
      id: 5,
      name: "mothername",
      type: "text",
      text: "mothername",
      value: StudentCredentials.mothername,
    },
    {
      id: 6,
      name: "mobile",
      type: "number",
      text: "mobile",
      value: StudentCredentials.mobile,
    },
    {
      id: 7,
      name: "bloodgroup",
      type: "text",
      text: "bloodgroup",
      value: StudentCredentials.bloodgroup,
    },
    {
      id: 8,
      name: "address",
      type: "text",
      text: "address",
      value: StudentCredentials.address,
    },
    {
      id: 9,
      name: "studentphoto",
      type: "file",
      text: "studentphoto",
      value: StudentCredentials.studentphoto,
    },
  ];

  React.useEffect(() => {
    setStaffName(studentcouserName.find((ee: any) => ee.coursename == staffdatas));
  }, [StudentCredentials.coursename]);

  return (
    <div className="Page">
      <Form>
        <h3 className="error-msg">{error && error}</h3>

        {Studentinputs.map((item: initialInput, index: number) => {
          return (
            <React.Fragment key={index}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{item.name}</Form.Label>
                <Form.Control
                  type={item.type}
                  name={item.name}
                  value={item.value}
                  aria-label={item.text}
                  placeholder={item.text}
                  autoFocus={false}
                  onChange={handleStudentFormChange}
                />
              </Form.Group>
            </React.Fragment>
          );
        })}

        <Form.Label>coursename</Form.Label>
        <Form.Select
          aria-label="coursename"
          value={StudentCredentials.coursename}
          onChange={handleStudentFormChange}
          name="coursename"
        >
          {studentcouserName
            .filter((e: any) => e.id < 16)
            .map((el: any, index: any) => {
              return (
                <option value={el.coursename} key={index}>
                  {el.coursename}
                </option>
              );
            })}
        </Form.Select>

        <Form.Label>staff</Form.Label>
        <Form.Select
          aria-label="staff"
          value={StudentCredentials.staff}
          onChange={handleStudentFormChange}
          name="staff"
        >
          {staffname?.staffName.map((el: any, index: any) => {
            return (
              <option value={el} key={index}>
                {el}
              </option>
            );
          })}
        </Form.Select>

        <Button
          role="button"
          variant={"primary"}
          onClick={(e) => OnSubmitForm(e, StudentCredentials)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
