import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import StatCard from '../components/StatCard.jsx'
import { useCustomersStore } from '../store/customers.js'

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Dashboard shell with top nav, sidebar, and content */
  const customers = useCustomersStore(s => s.customers)
  const total = customers.length
  const active = customers.filter(c => c.status === 'Active').length
  const inactive = total - active

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard title="Total Customers" value={total} color="primary" />
            <StatCard title="Active" value={active} color="secondary" />
            <StatCard title="Inactive" value={inactive} color="accent" />
          </section>
          <section className="space-y-6">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  )
}
