import React from "react";
import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperController from "./components/StepperController";
import Account from "./components/steps/Account";
import Final from "./components/steps/Final";
//import Payment from "./components/steps/Payment";
import Details from "./components/steps/Details";
import { StepperContext } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = ["Account Information", "Personal Information", "Complete"];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Final />;
      default:
        return null; 
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}>
            {displaySteps(currentStep)}
          </StepperContext.Provider>
        </div>

      </div>
      <StepperController
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}

export default App;
