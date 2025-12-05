import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import styles from './PaymentResult.module.css'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    // You could verify the session here if needed
    console.log('Payment successful, session:', sessionId)
  }, [sessionId])

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconSuccess}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>

        <h1 className={styles.title}>Dziękujemy za zakup!</h1>

        <p className={styles.message}>
          Twoja płatność została zrealizowana pomyślnie.
          Wkrótce skontaktujemy się z Tobą, aby omówić szczegóły instalacji Twojej strony.
        </p>

        <div className={styles.details}>
          <p>
            <strong>Co dalej?</strong>
          </p>
          <ul>
            <li>Otrzymasz potwierdzenie na email</li>
            <li>Skontaktujemy się w ciągu 24h</li>
            <li>Omówimy domenę i hosting</li>
            <li>Zainstalujemy Twoją stronę</li>
          </ul>
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </div>
  )
}
