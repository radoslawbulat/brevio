import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import styles from './Problem.module.css'

export function Problem() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className={styles.problem} ref={ref}>
      <Container>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Każdego dnia tracisz klientów na rzecz kancelarii, które powstały dwa lata temu.
          </h2>
          <div className={styles.text}>
            <p>
              Pięć lat temu wystarczyła dobra reputacja i polecenia. Dziś klient wpisuje
              "adwokat rozwód Kraków" w Google zanim zapyta znajomych. Albo pyta ChatGPT
              o rekomendację.
            </p>
            <p>
              Widzisz to sam. Kancelarie które otworzyły się dwa lata temu mają pełne kalendarze.
              Ty masz doświadczenie, ale oni mają widoczność. To nie kwestia jakości Twojej pracy.
              To kwestia tego, kto pojawia się pierwszy gdy klient szuka pomocy.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Problem
