import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

import { InputText } from "./inputText";
import { useDispatch } from "react-redux";
import { user } from "../redux/Reducers";
import { useSelector } from "react-redux";

export default function Forms({ nextStep }) {
  const [formvalue, setFormvalue] = useState({});
 
  const dispatch = useDispatch();
  const valuee = useSelector((state) => state.formAction);
  console.log(valuee, "safwdd");

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormvalue({
      ...formvalue,
      [name]: value,
    });
  };

  const onSubmit = () => {
    dispatch(user(formvalue));

    //   nextStep()
  };
  console.log(formvalue, "form");
  return (
    <Container>
      <h1>Enter Your Personal Details</h1>
      <Form>
        {InputText.map((item, itemidx) => {
          return (
            <div key={itemidx}>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                  type={item.type}
                  placeholder={item.label}
                  onChange={(e) => onChange(e)}
                  name={item.name}
                  required
                />{" "}
              </Form.Group>
            </div>
          );
        })}
        <Button variant="primary" onClick={() => onSubmit()}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
