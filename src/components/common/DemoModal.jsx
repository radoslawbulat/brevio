import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './DemoModal.module.css'

export function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xpwzgvvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nowe zapytanie demo od ${formData.name}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Zamknij">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.successTitle}>Dziękujemy!</h2>
            <p className={styles.successText}>
              Otrzymaliśmy Twoje zgłoszenie. Odezwiemy się w ciągu 24 godzin.
            </p>
            <Button variant="primary" size="medium" onClick={onClose}>
              Zamknij
            </Button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Umów demo</h2>
              <p className={styles.subtitle}>
                Zostaw swoje dane, a my odezwiemy się w ciągu 24 godzin, żeby umówić krótką rozmowę.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Jan Kowalski"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="jan@kancelaria.pl"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Wiadomość <span className={styles.optional}>(opcjonalnie)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Napisz nam o swojej kancelarii, specjalizacji, mieście..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
              </Button>

              <p className={styles.privacy}>
                Wysyłając formularz zgadzasz się na kontakt w sprawie oferty.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default DemoModal
