import { useState, useEffect } from 'react'
import styles from './DownloadModal.module.css'
import { generateWebsiteZip } from '../../utils/generateWebsite'

const SUGGESTED_AMOUNT = 1999

export default function DownloadModal({ isOpen, onClose, lawyerName }) {
  const [amount, setAmount] = useState(0)
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
    if (amount === 0) {
      // Free download - generate ZIP
      setIsGenerating(true)
      try {
        await generateWebsiteZip(lawyerName)
      } catch (error) {
        console.error('Error generating website:', error)
        alert('Wystąpił błąd podczas generowania strony. Spróbuj ponownie.')
      }
      setIsGenerating(false)
      onClose()
    } else {
      // Paid - redirect to Stripe Checkout
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
  }

  const handleScheduleCall = () => {
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

        <h2 className={styles.title}>Pobierz swoją stronę</h2>
        <p className={styles.subtitle}>
          Wybierz kwotę, którą chcesz zapłacić. Możesz pobrać za darmo lub wspomóc nasz projekt.
        </p>

        <div className={styles.sliderSection}>
          <div className={styles.amountDisplay}>
            <span className={styles.currency}>PLN</span>
            <span className={styles.amount}>{amount}</span>
          </div>

          <input
            type="range"
            min="0"
            max="5000"
            step="50"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className={styles.slider}
          />

          <div className={styles.sliderLabels}>
            <span>0 zł (darmowe)</span>
            <span>5000 zł</span>
          </div>
        </div>

        <div className={styles.tiers}>
          <button
            className={`${styles.tierBtn} ${amount === 0 ? styles.active : ''}`}
            onClick={() => setAmount(0)}
          >
            <span className={styles.tierPrice}>0 zł</span>
            <span className={styles.tierName}>Darmowe</span>
            <span className={styles.tierDesc}>Pobierz pliki strony</span>
          </button>

          <button
            className={`${styles.tierBtn} ${styles.suggested} ${amount === SUGGESTED_AMOUNT ? styles.active : ''}`}
            onClick={() => setAmount(SUGGESTED_AMOUNT)}
          >
            <span className={styles.badge}>Polecane</span>
            <span className={styles.tierPrice}>1999 zł</span>
            <span className={styles.tierName}>Z instalacją</span>
            <span className={styles.tierDesc}>Instalacja + hosting + domena</span>
          </button>
        </div>

        <button
          className={styles.downloadBtn}
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? (
            'Generowanie...'
          ) : amount === 0 ? (
            <>
              Pobierz za darmo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </>
          ) : (
            `Zapłać ${amount} zł`
          )}
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
