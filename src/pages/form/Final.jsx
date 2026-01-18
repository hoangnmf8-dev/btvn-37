import React, {useEffect, useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import useFormStore from "../../stores/formStore"

export default function Final() {
  const [show, setShow] = useState(false);
  const {username, info, step, async, setStep} = useFormStore(state => state);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
    navigate("/async");
  }

  const finalData = {
    email: info.email,
    age: info.age,
    lastName: info.lastName,
    firstName: info.firstName,
    username: username
  }
  useEffect(() => {
    setShow(true);
  }, [])

  if(!async) {
    setStep(1);
    return <Navigate to="/" replace/>
  }
  return (
    <div className={`${show ? "" : "opacity-0 invisible"} px-10 xl:px-0 xl:max-w-300 mx-auto transition-all duration-300 ease-in`}>
      <h1 className='text-3xl font-bold mb-6'>Congratulations</h1>
      <p className='text-lg'>You did it <span className='font-bold'>{username}</span> 🎉</p>
      <p className='text-md mb-6'>Here your input:</p>
      <div className='bg-[#0d1117] border border-gray-700 rounded-lg p-6 font-mono text-sm shadow-xl'>
        <pre className='text-gray-300 leading-relaxed'>
          <code>
            {JSON.stringify(finalData, null, 2)}
          </code>
        </pre>
      </div>
      <Button handleBack={handleBack}/>
    </div>
  )
}
