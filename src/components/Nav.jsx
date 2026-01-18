import React from 'react'
import useFromStore from "../stores/formStore"
export default function Nav() {
  const {step} = useFromStore(state => state);

  return (
    <div className=''>
      <div className='flex justify-between items-center px-8 h-[80px]'>
        <div className='text-2xl font-bold'>Wizard</div>
        <div className='flex items-center gap-3'>
          <span>Step {step} / 4</span>
          <img className='block w-15 aspect-square object-cover rounded-full' src="/public/github-6980894_960_720.webp" alt="Github_logo" />
        </div>
      </div>
      <div className='h-1.5 bg-gray-600 relative'>
        <div className='absolute top-0 left-0 bg-green-600 h-full transition-all duration-200 ease-in' style={{width: `${100 /3 * (step - 1)}%`}}></div>
      </div>
    </div>
  )
}
