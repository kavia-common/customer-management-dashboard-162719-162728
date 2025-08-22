import { create } from 'zustand'
import { nanoid } from '../utils/nanoid.js'

/**
 * Customers store; in a real app, wire to REST API.
 */
export const useCustomersStore = create((set, get) => ({
  customers: [
    { id: 'c_1', name: 'Jane Cooper', email: 'jane@example.com', phone: '(555) 123-4567', status: 'Active', company: 'Acme Inc.' },
    { id: 'c_2', name: 'Wade Warren', email: 'wade@example.com', phone: '(555) 765-1234', status: 'Active', company: 'Globex' },
    { id: 'c_3', name: 'Jenny Wilson', email: 'jenny@example.com', phone: '(555) 444-5678', status: 'Inactive', company: 'Initech' },
  ],
  // PUBLIC_INTERFACE
  addCustomer: (payload) => set((state) => ({
    customers: [{ id: nanoid('c_'), status: 'Active', ...payload }, ...state.customers]
  })),
  // PUBLIC_INTERFACE
  getCustomer: (id) => get().customers.find(c => c.id === id),
  // PUBLIC_INTERFACE
  updateCustomer: (id, patch) => set((state) => ({
    customers: state.customers.map(c => c.id === id ? { ...c, ...patch } : c)
  })),
  // PUBLIC_INTERFACE
  removeCustomer: (id) => set((state) => ({
    customers: state.customers.filter(c => c.id !== id)
  }))
}))
