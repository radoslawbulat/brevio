import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import styles from './About.module.css'

export function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className={styles.about} id="dla-kogo" ref={ref}>
      <Container>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>Czym jest Brevio?</span>
          <h2 className={styles.title}>
            Marketing kancelarii,<br />
            który działa w erze AI
          </h2>
          <p className={styles.description}>
            Brevio to usługa, która łączy klasyczne SEO z optymalizacją pod wyszukiwarki AI.
            Google Maps, content marketing i social media w jeden pakiet — za stałą miesięczną opłatę.
            Bez agencyjnego bełkotu, bez niejasnych raportów, bez umów na lata.
          </p>
          <div className={styles.charts}>
            {/* Website Visits Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <span className={styles.chartIcon}>🌐</span>
                <span className={styles.chartTitle}>Wizyty na stronie</span>
              </div>
              <div className={styles.chartValue}>
                1847 <span className={styles.chartPeriod}>w tym miesiącu</span>
                <span className={styles.chartChange}>+21%</span>
              </div>
              <div className={styles.chartArea}>
                <svg viewBox="0 0 200 60" className={styles.chartSvg}>
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,45 Q20,42 40,40 T80,35 T120,30 T160,25 T200,20 L200,60 L0,60 Z"
                    fill="url(#blueGradient)"
                  />
                  <path
                    d="M0,45 Q20,42 40,40 T80,35 T120,30 T160,25 T200,20"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                </svg>
                <div className={styles.chartLabels}>
                  <span>Sty</span>
                  <span>Mar</span>
                  <span>Maj</span>
                  <span>Lip</span>
                  <span>Wrz</span>
                  <span>Lis</span>
                </div>
              </div>
            </div>

            {/* Social Media Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <span className={styles.chartIcon}>📱</span>
                <span className={styles.chartTitle}>Social media</span>
              </div>
              <div className={styles.chartValue}>
                6657 <span className={styles.chartPeriod}>wyświetleń</span>
                <span className={styles.chartChange}>+15%</span>
              </div>
              <div className={styles.chartArea}>
                <svg viewBox="0 0 200 60" className={styles.chartSvg}>
                  <defs>
                    <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 Q30,48 50,45 T90,42 T130,35 T170,20 T200,10 L200,60 L0,60 Z"
                    fill="url(#blueGradient2)"
                  />
                  <path
                    d="M0,50 Q30,48 50,45 T90,42 T130,35 T170,20 T200,10"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                </svg>
                <div className={styles.chartLabels}>
                  <span>Sty</span>
                  <span>Mar</span>
                  <span>Maj</span>
                  <span>Lip</span>
                  <span>Wrz</span>
                  <span>Lis</span>
                </div>
              </div>
            </div>

            {/* Google Business Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <span className={styles.chartIcon}>📍</span>
                <span className={styles.chartTitle}>Google Business</span>
              </div>
              <div className={styles.chartValue}>
                1234 <span className={styles.chartPeriod}>wyświetleń</span>
                <span className={styles.chartChange}>+13%</span>
              </div>
              <div className={styles.chartArea}>
                <svg viewBox="0 0 200 60" className={styles.chartSvg}>
                  <defs>
                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,48 Q25,46 50,44 T100,40 T150,32 T200,22 L200,60 L0,60 Z"
                    fill="url(#greenGradient)"
                  />
                  <path
                    d="M0,48 Q25,46 50,44 T100,40 T150,32 T200,22"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="2"
                  />
                </svg>
                <div className={styles.chartLabels}>
                  <span>Sty</span>
                  <span>Mar</span>
                  <span>Maj</span>
                  <span>Lip</span>
                  <span>Wrz</span>
                  <span>Lis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
