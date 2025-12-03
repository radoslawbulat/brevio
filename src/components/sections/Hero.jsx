import Container from '../common/Container'
import Button from '../common/Button'
import { useDemoModal } from '../../context/DemoModalContext'
import styles from './Hero.module.css'

export function Hero() {
  const { openModal } = useDemoModal()

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="/hero.png"
          alt=""
          className={styles.backgroundImage}
        />
      </div>
      <Container>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Tylko 3 miejsca w grudniu
          </div>
          <h1 className={styles.headline}>
            Przestań szukać klientów.<br />
            Niech oni znajdą Ciebie.
          </h1>
          <p className={styles.subheadline}>
            Platforma do marketingu kancelarii prawnych. SEO, strona, mapy, treści, social media.
            <strong> Zgodna z zasadami etyki zawodowej.</strong>
          </p>
          <div className={styles.actions}>
            <Button variant="primary" size="large" onClick={openModal}>
              Umów demo →
            </Button>
            <Button variant="ghost" size="large" href="#dla-kogo">
              Co dokładnie robimy?
            </Button>
          </div>
          <div className={styles.proof}>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>1499 zł</span>
              <span className={styles.proofLabel}>miesięcznie, bez ukrytych kosztów</span>
            </div>
            <div className={styles.proofDivider}></div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>2-3×</span>
              <span className={styles.proofLabel}>więcej zapytań od klientów</span>
            </div>
            <div className={styles.proofDivider}></div>
            <div className={styles.proofItem}>
              <span className={styles.proofNumber}>Ekskluzywność</span>
              <span className={styles.proofLabel}>limitowana liczba kancelarii</span>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Hero
