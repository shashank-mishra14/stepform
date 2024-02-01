import React from "react";
import Stepper from "./components/Stepper";
import StepperController from "./components/StepperController";
function App() {

  const steps=[
    "Account Information",
    "Personal Information",
    "Complete"
  ]

  const displaySteps = (step)=>{
    switch(step){
      case 1:
        return <Account/>
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {}
      <div className="container horizontal mt-5">
        <Stepper />
      </div>
      {}
      <StepperController />
    </div>
  );
}

export default App;
