import React from "react";
import { initialInput } from "../Variable/Types";
import { Form, Button } from "react-bootstrap";
import Coursehooks from "./Hooks/Course.hooks";

export default function CourseForm() {
  const {
    CourseCredentials,
    handleCourseormChange,
    error,
    OnSubmitForm,
    FetchStaffName,
    staffsname,
  } = Coursehooks();

  React.useEffect(() => {
    FetchStaffName();
  }, []);

  return (
    <div className="Page">
      <Form>
        <h3 className="error-msg">{error && error}</h3>

        <React.Fragment>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>coursename</Form.Label>
            <Form.Control
              type="text"
              name="coursename"
              value={CourseCredentials.coursename}
              aria-label="coursename"
              placeholder="coursename"
              autoFocus={false}
              onChange={handleCourseormChange}
            />
          </Form.Group>
        </React.Fragment>

        <Form.Label>staffName</Form.Label>
        <Form.Select
          aria-label="staffName"
          value={CourseCredentials.staffName}
          onChange={handleCourseormChange}
          name="staffName"
          placeholder="staffName"
        >
          {Object.values(staffsname).map((e: any, index: any) => {
            return (
              <option value={e.name} key={index}>
                {e.name}
              </option>
            );
          })}
        </Form.Select>

        <Button
          role="button"
          variant={"primary"}
          onClick={() => OnSubmitForm(CourseCredentials)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
