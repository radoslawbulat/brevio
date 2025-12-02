import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className={styles.howItWorks} id="jak-to-dziala" ref={ref}>
      <Container>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Jak to działa?</h2>
          <p className={styles.subtitle}>
            Jedna platforma. Cały marketing. Ty zajmujesz się klientami — my zajmujemy się wzrostem Twojego biznesu.
          </p>
        </div>

        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureNumber}>1</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Wszystko w jednym miejscu</h3>
                <p className={styles.featureDesc}>
                  Strona, SEO, Google Maps, social media, treści, raporty — wszystko zarządzane z jednego panelu. Bez żonglowania agencjami i freelancerami.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureNumber}>2</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>My robimy, Ty akceptujesz</h3>
                <p className={styles.featureDesc}>
                  Przygotowujemy treści, posty, optymalizacje. Ty tylko zatwierdzasz jednym kliknięciem. Zero stresu, pełna kontrola.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureNumber}>3</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Widzisz wyniki na żywo</h3>
                <p className={styles.featureDesc}>
                  Dashboard z metrykami w czasie rzeczywistym.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.screenshotWrapper}>
            <img
              src="/image.png"
              alt="Screenshot platformy Brevio"
              className={styles.screenshot}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
