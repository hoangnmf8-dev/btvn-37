import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useFormStore from '../../stores/formStore'
import Button from '../../components/Button';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useNavigate, Navigate } from 'react-router-dom';


export default function Username() {
  const [show, setShow] = useState(false);
  const {username, info, step, setStep, setUsername} = useFormStore(state => state);
  const navigate = useNavigate();

  const schema = z.object({
    username: z.string().trim().min(1, {
      message: "This field is required"
    })
    .superRefine((username ,context) => {
      if(!username.includes(info.firstName)) {
        context.addIssue({
          code: "custom",
          message: `Username should contain your first name (${info.firstName})`
        })
      }
    })
  })

  const {register, handleSubmit, formState} = useForm({
    defaultValues: {username},
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  const {errors, isValid} = formState;

  const onSubmit = (data) => {
    setUsername(data.username);
    setStep(step + 1);
    navigate("/async");
  }

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
    navigate("/");
  }

  useEffect(() => {
    setShow(true);
  }, [])

  if(!Object.entries(info).length) {
    setStep(1);
    return <Navigate to="/" replace/>
  }
  return (
    <div className={`${show ? "" : "opacity-0 invisible"} px-10 xl:px-0 xl:max-w-300 mx-auto transition-all duration-300 ease-in`}>
      <h1 className='text-3xl font-bold mb-6'>Username</h1>
      <p className='text-lg'>Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.</p>
      <form className='flex flex-wrap -mx-3'>
        <div className='basis-1/2 p-3'>
          <h2 className='mb-2'>First Name</h2>
          <input className='bg-gray-600 rounded-xl outline-cyan-500 px-4 py-3 w-full' type="text" placeholder='e.g. John' autoFocus={true} {...register("username")}/>
          {errors?.username?.message && <span className='text-red-500 text-md mt-2 block'>{errors?.username?.message}</span>}
        </div>
        <Button handleSubmit={handleSubmit} onSubmit={onSubmit} isValid={isValid} handleBack={handleBack}/>
      </form>
    </div>
  )
}
