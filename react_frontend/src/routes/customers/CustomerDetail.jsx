import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCustomersStore } from '../../store/customers.js'

// PUBLIC_INTERFACE
export default function CustomerDetail() {
  /** Detailed view; allows status toggle and deletion */
  const { id } = useParams()
  const navigate = useNavigate()
  const getCustomer = useCustomersStore(s => s.getCustomer)
  const updateCustomer = useCustomersStore(s => s.updateCustomer)
  const removeCustomer = useCustomersStore(s => s.removeCustomer)

  const customer = useMemo(() => getCustomer(id), [id, getCustomer])
  const [edit, setEdit] = useState({
    name: customer?.name || '',
    email: customer?.email || '',
    phone: customer?.phone || '',
    company: customer?.company || ''
  })

  if (!customer) {
    return (
      <div className="card p-6">
        <div className="text-gray-600">Customer not found.</div>
      </div>
    )
  }

  const onSave = () => {
    updateCustomer(customer.id, edit)
  }

  const onToggleStatus = () => {
    updateCustomer(customer.id, { status: customer.status === 'Active' ? 'Inactive' : 'Active' })
  }

  const onDelete = () => {
    removeCustomer(customer.id)
    navigate('/dashboard/customers')
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setEdit(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="card p-6 lg:col-span-2">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input className="input" name="name" value={edit.name} onChange={onChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input className="input" name="email" type="email" value={edit.email} onChange={onChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input className="input" name="phone" value={edit.phone} onChange={onChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input className="input" name="company" value={edit.company} onChange={onChange} />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="btn btn-primary" onClick={onSave}>Save</button>
          <button className="btn btn-outline" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      <div className="card p-6 space-y-4">
        <div>
          <div className="text-sm text-gray-500">Status</div>
          <div className="mt-1">
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
              customer.status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-700'
            }`}>
              {customer.status}
            </span>
          </div>
        </div>
        <button className="btn btn-outline w-full" onClick={onToggleStatus}>
          Toggle Status
        </button>
        <button className="btn w-full bg-red-600 text-white hover:opacity-95" onClick={onDelete}>
          Delete Customer
        </button>
      </div>
    </div>
  )
}
