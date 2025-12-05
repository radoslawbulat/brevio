import { Link, useSearchParams } from 'react-router-dom'
import styles from './PaymentResult.module.css'

export default function PaymentCancelled() {
  const [searchParams] = useSearchParams()
  const returnUrl = searchParams.get('return') || '/'

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconCancelled}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        </div>

        <h1 className={styles.title}>Płatność anulowana</h1>

        <p className={styles.message}>
          Twoja płatność została anulowana. Nie pobrano żadnych środków.
        </p>

        <div className={styles.details}>
          <p>
            Jeśli masz pytania lub napotkałeś problem, skontaktuj się z nami.
          </p>
        </div>

        <div className={styles.actions}>
          <Link to={returnUrl} className={styles.btnPrimary}>
            Wróć do strony
          </Link>
          <a
            href="https://cal.com/vencer/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Umów rozmowę
          </a>
        </div>
      </div>
    </div>
  )
}
