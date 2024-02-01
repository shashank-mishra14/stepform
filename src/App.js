import React from "react";
import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperController from "./components/StepperController";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";;
import Final from "./components/steps/Final";;
import Payment from "./components/steps/Payment";

function App() {

  const [currentStep, setCurrentStep] = useState(1)

  const steps=[
    "Account Information",
    "Personal Information",
    "Complete"
  ]

  const displaySteps = (step)=>{
    switch(step){
      case 1:
        return <Account/>
        case 2:
        return <Details/>
        case 3:
        return <Final/>
        default: 
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {}
      <div className="container horizontal mt-5">
        <Stepper 
        steps={steps}
        currentStep={currentStep}/>
      </div>
      {}
      <StepperController />
    </div>
  );
}

export default App;
