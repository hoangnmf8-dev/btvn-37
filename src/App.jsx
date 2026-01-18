import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormLayout from './layout/FormLayout'
import Contact from "./pages/form/Contact"
import Username from "./pages/form/Username"
import Async from "./pages/form/Async"
import Final from "./pages/form/Final"

export default function App() {
  return (
    <div className='bg-gray-800 h-screen text-white'>
      <Routes>
        <Route element={<FormLayout />}>
          <Route index element={<Contact />} />
          <Route path='username' element={<Username />} />
          <Route path='async' element={<Async />} />
          <Route path='final' element={<Final />} />
        </Route>
      </Routes>
    </div>
  )
}
