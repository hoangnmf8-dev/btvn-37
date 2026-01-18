import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormLayout from './layout/FormLayout'
import Contact from "./pages/form/Contact"
import Username from "./pages/form/Username"
export default function App() {
  return (
    <div className='bg-cyan-900'>
      <Routes>
        <Route path="/form" element={<FormLayout />}>
          <Route path="contact-info" element={<Contact />} />
          <Route path='username' element={<Username />} />
          <Route path='async' element={<Contact />} />
          <Route path='final' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}
