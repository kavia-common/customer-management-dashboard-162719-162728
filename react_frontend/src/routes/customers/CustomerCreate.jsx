import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCustomersStore } from '../../store/customers.js'

// PUBLIC_INTERFACE
export default function CustomerCreate() {
  /** Form to create a new customer */
  const addCustomer = useCustomersStore(s => s.addCustomer)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    if (!form.name || !form.email) {
      setError('Name and email are required')
      return
    }
    addCustomer(form)
    navigate('/dashboard/customers')
  }

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Create Customer</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input className="input" name="name" value={form.name} onChange={onChange} placeholder="Jane Cooper" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input className="input" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input className="input" name="phone" value={form.phone} onChange={onChange} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input className="input" name="company" value={form.company} onChange={onChange} placeholder="Acme Inc." />
        </div>
        {error && <div className="sm:col-span-2 text-sm text-red-600">{error}</div>}
        <div className="sm:col-span-2 flex gap-2">
          <button type="submit" className="btn btn-primary">Create</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
