import React, { useState } from "react";
import Forms from "./Forms";
import Contact from "./Contact";

export default function IndexComponent() {
  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  console.log(step, "b");
  switch (step) {
    case 1:
      return <Forms nextStep={nextStep} />;
    case 2:
      return <Contact prevStep={prevStep} nextStep={nextStep} />;
    default:
      <Forms />;
  }
}
