import React from 'react'
import { Link } from 'react-router-dom'
import CustomerTable from '../../components/CustomerTable.jsx'
import { useCustomersStore } from '../../store/customers.js'

// PUBLIC_INTERFACE
export default function CustomersList() {
  /** Renders the list of customers with a quick action to create new */
  const customers = useCustomersStore(s => s.customers)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Customers</h2>
        <Link to="/dashboard/customers/new" className="btn btn-primary">New Customer</Link>
      </div>
      <CustomerTable customers={customers} />
    </div>
  )
}
