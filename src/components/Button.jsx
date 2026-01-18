import React, {useState} from 'react'
import useFormStore from '../stores/formStore'
import Loading from "../components/Loading"
import {useNavigate} from "react-router-dom"

export default function Button(props) {
  const [isLoading, setIsLoading] = useState(false);
  const {step, setStep, setAsync} = useFormStore(state => state);
  const navigate = useNavigate();

  let isDisabled;
  if(props.isValid === undefined || props.isValid === true) {
    isDisabled = false;
  } else if(props.isValid === false) {
    isDisabled = true;
  }

  const handleNext = async () => {
    setIsLoading(true);
    if(step === 3) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
          setIsLoading(false);
        }, 2000)
      })
      setStep(step + 1);
      setAsync(true);
      navigate("/final");
    }
  }
  return (
    <div className='fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-10 md:gap-70'>
      <button className={`min-w-30 flex items-center gap-2 px-4 py-2 rounded-lg text-white transition duration-200 ${step === 1 ? "bg-gray-500 hover:cursor-not-allowed" : "bg-[#422ad5] hover:cursor-pointer hover:bg-[#15037d]"}`} disabled={step === 1} onClick={props.handleBack}>
        <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <rect width="24" height="24" fill="none"></rect>
            <path 
              d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z" 
              transform="translate(19.75 7.25) scale(-1, 1)" 
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <span className='text-lg'>Previous</span>
      </button>

      <button className={`${step === 4 ? "hidden" : ""} min-w-30 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition duration-200 ${!isDisabled ? "bg-[#422ad5] hover:cursor-pointer hover:bg-[#15037d]" : "bg-gray-500 hover:cursor-not-allowed"}`} onClick={step <= 2 ? props.handleSubmit(props.onSubmit) : handleNext} disabled={isDisabled}>
        {isLoading ? <Loading width="w-6" borderColor="border-white"/> : (<><span className='text-lg'>Next</span>
        <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <rect width="24" height="24" fill="none"></rect>
            <path 
              d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z" 
              transform="translate(4.25 7.25)" 
              fill="currentColor"
            ></path>
          </g>
        </svg></>)}
      </button>
    </div>
  )
}
