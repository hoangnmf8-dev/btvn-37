import React, {useEffect, useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import useFormStore from "../../stores/formStore"

export default function Async() {
  const [show, setShow] = useState(false);
  const {username, step, setStep} = useFormStore(state => state);

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
    navigate("/username");
  }

  useEffect(() => {
    setShow(true);
  }, [])
  
  if(!username) {
    setStep(1);
    return <Navigate to="/" replace/>
  }

  return (
    <div className={`${show ? "" : "opacity-0 invisible"} px-10 xl:px-0 xl:max-w-300 mx-auto transition-all duration-300 ease-in`}>
      <h1 className='text-3xl font-bold mb-6'>Async</h1>
      <p className='text-lg'>Pressing 'Next' does async operation that takes 2 seconds before we proceed to the next step</p>
      <Button handleBack={handleBack}/>
    </div>
  )
}
