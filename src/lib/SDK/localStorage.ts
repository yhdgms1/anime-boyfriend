const KEY = 'app222834'

const getDefault = () => {
  return {};
}

const LocalStorage = {
  async get() {
    try {
      const value = localStorage.getItem(KEY)
      const parsed = value ? JSON.parse(value) : null

      return parsed || getDefault()
    } catch {
      return getDefault()
    }
  },
  async set(data: unknown) {
    try {
      return localStorage.setItem(KEY, JSON.stringify(data))
    } finally { }
  },
}

export { LocalStorage }
