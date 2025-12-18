import { useState, useEffect } from 'react'
import styles from './DownloadModal.module.css'
import { trackEvent, EVENTS } from '../../utils/analytics'

const SUGGESTED_AMOUNT = 999

export default function DownloadModal({ isOpen, onClose, lawyerName }) {
  const amount = SUGGESTED_AMOUNT // Fixed at 999 PLN
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleDownload = async () => {
    // Paid - redirect to Stripe Checkout for 999 PLN
    trackEvent(EVENTS.PAYMENT_START, {
      lawyer_name: lawyerName,
      amount: amount,
    })
    setIsGenerating(true)
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, lawyerName, returnUrl: window.location.pathname }),
      })
      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Błąd płatności')
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Wystąpił błąd podczas tworzenia płatności. Spróbuj ponownie.')
      setIsGenerating(false)
    }
  }

  const handleScheduleCall = () => {
    trackEvent(EVENTS.SCHEDULE_CALL, {
      lawyer_name: lawyerName,
    })
    window.open('https://cal.com/vencer/30min', '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className={styles.author}>
          <img src="/radek.jpeg" alt="Radek" className={styles.authorPhoto} />
          <p className={styles.authorMessage}>
            Powodzenia z kancelarią! Mam nadzieję, że strona przyniesie wielu klientów. — <a href="https://www.linkedin.com/in/radoslawbulat/" target="_blank" rel="noopener noreferrer">Radosław Bułat</a>
          </p>
        </div>
        <h2 className={styles.title}>Zamów swoją stronę</h2>
        <p className={styles.subtitle}>
          Skorzystaj z promocyjnej oferty. Pełna instalacja i zmiana treści. Oferta ważna do 19 grudnia 2025.
        </p>

        <div className={styles.centeredTier}>
          <button
            className={`${styles.tierBtn} ${styles.suggested} ${styles.active}`}
          >
            <span className={styles.badge}>Polecane</span>
            <span className={styles.tierPrice}><span className={styles.oldPrice}>2999 zł</span> 999 zł <span className={styles.brutto}>brutto</span></span>
            <span className={styles.tierName}>Z instalacją</span>
            <span className={styles.tierDesc}>Instalacja + Zmiana treści</span>
          </button>
        </div>

        <button
          className={styles.downloadBtn}
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generowanie...' : 'Zamów za 999 zł'}
        </button>

        <div className={styles.divider}>
          <span>lub</span>
        </div>

        <button className={styles.customBtn} onClick={handleScheduleCall}>
          Chcę projekt autorski
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span className={styles.customSubtext}>Umów się na rozmowę</span>
        </button>
      </div>
    </div>
  )
}
