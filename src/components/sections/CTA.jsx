import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import Button from '../common/Button'
import { useDemoModal } from '../../context/DemoModalContext'
import styles from './CTA.module.css'

export function CTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })
  const { openModal } = useDemoModal()

  return (
    <section className={styles.cta} ref={ref} id="demo">
      <Container size="narrow">
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Darmowa konsultacja
          </div>
          <h2 className={styles.title}>
            Gotowy na więcej klientów?
          </h2>
          <p className={styles.description}>
            Sprawdź czy Twoje miasto i specjalizacja są jeszcze dostępne. Bezpłatna rozmowa, bez zobowiązań.
            Dowiesz się czy możemy Ci pomóc.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" size="large" onClick={openModal}>
              Umów demo →
            </Button>
          </div>
          <div className={styles.contact}>
            <p>lub napisz: <a href="mailto:radek@brevio.pl">radek@brevio.pl</a></p>
          </div>
          <p className={styles.note}>
            Odpowiadamy w ciągu 24h. Jeśli nie odpiszemy — znaczy że jesteśmy pełni i nie możemy przyjąć więcej klientów.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default CTA
