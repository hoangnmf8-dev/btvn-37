import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import useFormStore from '../../stores/formStore'
import Button from '../../components/Button';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useLocation, useNavigate } from 'react-router-dom';

const schema = z.object({
  firstName: z.string().trim().min(1, {
    message: "This field is required"
  }),
  lastName: z.string().trim().min(1, {
    message: "This field is required"
  }),
  age: z.coerce.number()
  .gte(18, {
    message: "Age must be greater than 18",
  }),
  email: z.string().trim().min(1, {
    message: "This field is required"
  })
  .pipe(
    z.email({
      message: "The email is not in the correct format."
    })
  )
});

export default function Contact() {
  const [show, setShow] = useState(false);
  const {info, step, setInfo, setStep} = useFormStore(state => state);
  const navigate = useNavigate();

  const {register, handleSubmit, formState} = useForm({
    defaultValues: info,
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  const {errors, isValid} = formState;

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    console.log(data);
    setInfo(data);
    setStep(step + 1);
    navigate("/username");
  }

  useEffect(() => {
    setShow(true);
  }, [])

  return (
    <div className={`${show ? "" : "opacity-0 invisible"} px-10 xl:px-0 xl:max-w-300 mx-auto transition-all duration-300 ease-in`}>
      <h1 className='text-3xl font-bold mb-6'>Contact Info</h1>
      <form className='flex flex-wrap -mx-3'>
        <div className='basis-1/2 p-3'>
          <h2 className='mb-2'>First Name</h2>
          <input className='bg-gray-600 rounded-xl outline-cyan-500 px-4 py-3 w-full' type="text" placeholder='e.g. John' autoFocus={true} {...register("firstName")}/>
          {errors?.firstName?.message && <span className='text-red-500 text-md mt-2 block'>{errors?.firstName?.message}</span>}
        </div>
        <div className='basis-1/2 p-3 pb-8'>
          <h2 className='mb-2'>Last Name</h2>
          <input className='bg-gray-600 rounded-xl outline-cyan-500 px-4 py-3 w-full' type="text" placeholder='e.g. Doe' {...register("lastName")}/>
          {errors?.lastName?.message && <span className='text-red-500 text-md mt-2 block'>{errors?.lastName?.message}</span>}
        </div>
        <div className='basis-1/2 p-3 pb-8'>
          <h2 className='mb-2'>Age</h2>
          <input className='bg-gray-600 rounded-xl outline-cyan-500 px-4 py-3 w-full' type="number" min="1" max="100" step="1" placeholder='e.g. 18' {...register("age")}/>
          {errors?.age?.message && <span className='text-red-500 text-md mt-2 block'>{errors?.age?.message}</span>}
        </div>
        <div className='basis-1/2 p-3 pb-8'>
          <h2 className='mb-2'>Email</h2>
          <input className='bg-gray-600 rounded-xl outline-cyan-500 px-4 py-3 w-full' type="text" placeholder='e.g. john@doe.com' {...register("email")}/>
          {errors?.email?.message && <span className='text-red-500 text-md mt-2 block'>{errors?.email?.message}</span>}
        </div>
        <Button handleSubmit={handleSubmit} onSubmit={onSubmit} isValid={isValid}/>
      </form>
    </div>
  )
}
