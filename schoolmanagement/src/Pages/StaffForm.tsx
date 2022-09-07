import React from "react";
import { initialInput } from "../Variable/Types";
import { Form, Button } from "react-bootstrap";
import Staffhooks from "./Hooks/Staff.hooks";

export default function StaffForm() {
  const { handleStaffFormChange, error, OnSubmitForm, StaffCredentials } =
  Staffhooks();

  const Staffinputs: initialInput[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      text: "name",
      value: StaffCredentials.name,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      text: "email",
      value: StaffCredentials.email,
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      text: "dob",
      value: StaffCredentials.dob,
    },
    {
      id: 4,
      name: "mobile",
      type: "text",
      text: "mobile",
      value: StaffCredentials.mobile,
    },
  ];

  return (
    <div className="Page">
      <Form>
      <h3 className="error-msg">{error && error}</h3>

        {Staffinputs.map((item: initialInput, index: number) => {
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
                  onChange={handleStaffFormChange}
                />
              </Form.Group>
            </React.Fragment>
          );
        })}
        <Button
          role="button"
          variant={"primary"}
          onClick={() => OnSubmitForm(StaffCredentials)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
