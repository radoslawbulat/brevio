import { createContext, useContext } from 'react'

const CALENDAR_URL = 'https://cal.com/vencer/30min'

const DemoModalContext = createContext()

export function DemoModalProvider({ children }) {
  const openModal = () => {
    window.open(CALENDAR_URL, '_blank')
  }

  return (
    <DemoModalContext.Provider value={{ openModal }}>
      {children}
    </DemoModalContext.Provider>
  )
}

export function useDemoModal() {
  const context = useContext(DemoModalContext)
  if (!context) {
    throw new Error('useDemoModal must be used within a DemoModalProvider')
  }
  return context
}
