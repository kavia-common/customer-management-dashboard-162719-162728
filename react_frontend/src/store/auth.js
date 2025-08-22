import { create } from 'zustand'

/**
 * Simple auth store; in a real app, integrate with backend.
 */
export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  // PUBLIC_INTERFACE
  login: async (email, password) => {
    /** Mock login; accept any non-empty credentials */
    await new Promise(r => setTimeout(r, 600))
    if (!email || !password) throw new Error('Email and password are required')
    set({ isAuthenticated: true, user: { email } })
    return true
  },
  // PUBLIC_INTERFACE
  logout: () => set({ isAuthenticated: false, user: null })
}))
