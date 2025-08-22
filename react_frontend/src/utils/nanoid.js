export function nanoid(prefix = '') {
  const s = Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4)
  return `${prefix}${s}`
}
