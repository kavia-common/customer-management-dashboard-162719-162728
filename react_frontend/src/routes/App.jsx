import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Toaster } from '../ui/Toaster.jsx'

// PUBLIC_INTERFACE
export default function App() {
  /** Top-level outlet container; renders children routes and a toaster. */
  const location = useLocation()
  const isLogin = location.pathname.startsWith('/login')
  return (
    <div className={`min-h-screen ${isLogin ? 'gradient-accent' : 'bg-gray-50'}`}>
      <Outlet />
      <Toaster />
    </div>
  )
}
