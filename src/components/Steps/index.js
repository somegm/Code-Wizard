import React, { useState } from "react";
import ChooseType from "../ChooseType/index.js";

const Stepper = ({ steps = [], currentStep, setStep }) => {
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  };

  return (
    <div>
      {steps.map((step, index) => (
        <div key={index}>
          <p>{step}</p>
        </div>
      ))}
      <button onClick={previousStep} disabled={currentStep === 0}>Previous</button>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
    </div>
  );
};

const StepCounter = ({ step }) => {
  return (
    <div>
      {step === 0 && <ChooseType/>}
      {step === 1 && <div>Step 2</div>}
      {step === 2 && <div>Step 3</div>}
      {step === 3 && <div>Step 4</div>}
    </div>
  );
};

export default function StepFunction() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["one", "two", "three", "four"];

  return (
    <div>
      <Stepper setStep={setCurrentStep} steps={steps} currentStep={currentStep} />
      <StepCounter step={currentStep} />
    </div>
  );
}
  