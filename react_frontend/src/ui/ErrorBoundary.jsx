import React from 'react'

/**
 * ErrorBoundary catches rendering errors in its children and shows a fallback UI.
 * PUBLIC_INTERFACE
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log for diagnostics; in real apps route this to a logger
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  // PUBLIC_INTERFACE
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="card max-w-lg w-full p-6">
            <h1 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-sm text-gray-600">
              An unexpected error occurred while rendering the application.
            </p>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <pre className="mt-4 text-xs bg-gray-50 p-3 rounded border border-gray-200 overflow-auto">
                {String(this.state.error?.message || this.state.error)}
              </pre>
            )}
            <button
              className="btn btn-primary mt-4"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
