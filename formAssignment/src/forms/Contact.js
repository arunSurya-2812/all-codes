import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import UseFormHooks from "../axios/useForm.hooks";
import { ContactInput } from "./inputText";

export default function Contact({ nextStep, prevStep }) {
  const [formvalue, setFormvalue] = useState({});
  const { Formsubmit } = UseFormHooks();
 

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormvalue({
        ...formvalue,
        [name]: value,
      });
  };

  const onSubmit = () => {
    Formsubmit(formvalue);
    nextStep();
  };
  console.log(formvalue, "form");
  return (
    <Container>
      <h1>Enter Your Contact Details</h1>
      <Form>
        {ContactInput.map((item, itemidx) => {
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
        <Button variant="primary" type="submit" onSubmit={() => onSubmit()}>
          Submit
        </Button>
        <Button variant="primary" onSubmit={prevStep()}>
          Back
        </Button>
      </Form>
    </Container>
  );
}
