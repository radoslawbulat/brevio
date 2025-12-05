import { useState, useEffect } from 'react'
import styles from './PasswordGate.module.css'

const PASSWORD = '2025'
const STORAGE_KEY = 'brevio_lawyer_access'

export default function PasswordGate({ children, lawyerSlug }) {
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
    const isCorrect = password === PASSWORD

    // Track password attempt in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'password_attempt', {
        event_category: 'lawyer_preview',
        event_label: lawyerSlug || window.location.pathname,
        success: isCorrect,
      })
    }

    if (isCorrect) {
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
          <img src="/brevio.svg" alt="Brevio" height="28" />
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
