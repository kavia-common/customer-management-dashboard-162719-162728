import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Sidebar with navigational links */
  const linkClass = ({ isActive }) =>
    clsx(
      'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition',
      isActive ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-100'
    )
  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white">
      <div className="p-4">
        <nav className="space-y-1">
          <NavLink to="/dashboard/customers" className={linkClass}>Customers</NavLink>
          <NavLink to="/dashboard/customers/new" className={linkClass}>Create Customer</NavLink>
        </nav>
      </div>
    </aside>
  )
}
