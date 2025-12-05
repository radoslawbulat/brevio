import { useState, useEffect } from 'react'
import styles from './PasswordGate.module.css'

const PASSWORD = '1234'
const STORAGE_KEY = 'brevio_lawyer_access'

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored === 'granted') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'granted')
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  if (isAuthenticated) {
    return children
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.logo}>
          <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="24" fontFamily="Manrope, sans-serif" fontSize="24" fontWeight="700" fill="currentColor">brevio</text>
          </svg>
        </div>
        <h1 className={styles.title}>Podgląd strony</h1>
        <p className={styles.description}>
          Ta strona jest przygotowana specjalnie dla Ciebie.
          Wprowadź hasło, aby zobaczyć podgląd.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Wprowadź hasło"
            className={`${styles.input} ${error ? styles.inputError : ''}`}
            autoFocus
          />
          {error && (
            <p className={styles.error}>Nieprawidłowe hasło. Spróbuj ponownie.</p>
          )}
          <button type="submit" className={styles.button}>
            Zobacz stronę
          </button>
        </form>
        <p className={styles.hint}>
          Hasło znajdziesz w wiadomości, którą otrzymałeś.
        </p>
      </div>
    </div>
  )
}
