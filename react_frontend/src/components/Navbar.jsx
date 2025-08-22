import React from 'react'
import { useAuthStore } from '../store/auth.js'
import { Link } from 'react-router-dom'

// PUBLIC_INTERFACE
export default function Navbar() {
  /** Top nav with brand and user controls */
  const { user, logout } = useAuthStore()
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-accent" />
          <span className="font-semibold text-gray-900">Customer Dashboard</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">{user?.email}</span>
          <button className="btn btn-outline" onClick={logout}>Logout</button>
        </div>
      </div>
    </header>
  )
}
