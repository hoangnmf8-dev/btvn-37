import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from "../components/Nav"

export default function FormLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}
