import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from "../components/Nav"

export default function FormLayout() {

  return (
    <div className='h-full'>
      <Nav />
      <div className='mt-30'>
        <Outlet />
      </div>
    </div>
  )
}
