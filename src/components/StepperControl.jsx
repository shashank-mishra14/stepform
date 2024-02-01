import React from "react";

const StepperControl = (handleClick,currentStep,steps) => {
  return (
    <div className="container flex justify-around mt-4 mb-8"> 
      <button className="bg-white text-slate-400 
      uppercase py-2 px-4 rounder-xl font-semibold cursor-pointer 
      border-slate-300 hover:bg-slate-700 hover:text-white 
      transition duration-2oo ease-in-out">
        Back
      </button>
      <button className="bg-green-500 text-white  
      uppercase py-2 px-4 rounder-xl font-semibold cursor-pointer 
      hover:bg-slate-700 hover:text-white 
      transition duration-2oo ease-in-out">
        Next
        </button>
    </div>
  );
};

export default StepperControl;
