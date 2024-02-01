import React,{useState, useEffect, useRef} from "react";

const Stepper = ({steps, currentSteps}) => {
const [newSteps, setNewSteps] = useState([]);
const stepRef = useRef(newSteps);
const updateStep = (stepNumber,steps) => {
    const newSteps = [...steps];
    let count =0;
    while(count<newSteps.length){
        if(count === stepNumber){
            newSteps[count] = {...newSteps[count],
                completed: true,
                highlighted: true,
                selected: true,
            };
            count++;
        }
        else if(count < stepNumber){
            newSteps[count] = {...newSteps[count],
                completed: true,
                highlighted: false,
                selected: true,
            };
            count++;
        }else{
            newSteps[count] = {...newSteps[count],
                completed: false,
                highlighted: false,
                selected: false,
            };
            count++;
        }
    }
    return newSteps;
};
        useEffect(() =>{
                const stepsState =steps.map((step,index)=>
                Object.assign({},{
                        description: step,
                        completed: false,
                        highlighted: index ===0 ? true : false,
                        selected: index ===0 ? true : false,
                }));
                stepRef.current = stepsState;
                const current = updateStep(currentSteps-1, stepRef.current);
                setNewSteps(current);
        },[steps, currentSteps]);

        const displaySteps = newSteps.map((step,index) => {
                return (
                        <div key={index} className={
                            index !== newSteps.length -1 ?
                        "w-full flex items-center":"flex-items-center" }>
                            <div className="relative flex flex-col items-center text-teal-600">
                                <div
                                    className="rounded-full transition duration-500 ease-in-out border-2 
                                    border-gray-300 h-12 w-12 flex items-center
                                    justify-center py-3"
                                >
                                    {/*display number*/}
                                </div>
                                <div
                                    className="absolute top-0 text-center mt-16 
                                    w-32 text-xs font-medium uppercase"
                                >
                                    {/*display desc*/}
                                </div>
                            </div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out">
                                {/*displayline*/}
                            </div>
                        </div>
                    );
                
        });

    return (
        <div className="mx-4 p-4 flex justify-between items-center">
            {displaySteps}
        </div>
    );
};

export default Stepper;
