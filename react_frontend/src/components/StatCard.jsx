import React from 'react'

// PUBLIC_INTERFACE
export default function StatCard({ title, value, hint, color = 'primary' }) {
  /** Small stat card with accent bar */
  const colorCls = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  }[color] || 'bg-primary'

  return (
    <div className="card p-4">
      <div className={`h-1.5 w-12 rounded-full ${colorCls} mb-3`} />
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      {hint && <div className="mt-1 text-xs text-gray-500">{hint}</div>}
    </div>
  )
}
