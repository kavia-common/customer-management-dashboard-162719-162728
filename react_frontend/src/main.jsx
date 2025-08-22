import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './routes/App.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import CustomersList from './routes/customers/CustomersList.jsx'
import CustomerDetail from './routes/customers/CustomerDetail.jsx'
import CustomerCreate from './routes/customers/CustomerCreate.jsx'
import { useAuthStore } from './store/auth.js'

// PUBLIC_INTERFACE
function PrivateRoute({ children }) {
  /** Protects routes by checking auth state from the store. */
  const isAuthed = useAuthStore.getState().isAuthenticated
  return isAuthed ? children : <Navigate to="/login" replace />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'login', element: <Login /> },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <CustomersList /> },
          { path: 'customers', element: <CustomersList /> },
          { path: 'customers/new', element: <CustomerCreate /> },
          { path: 'customers/:id', element: <CustomerDetail /> }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
