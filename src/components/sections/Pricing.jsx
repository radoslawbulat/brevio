import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import Button from '../common/Button'
import { useDemoModal } from '../../context/DemoModalContext'
import styles from './Pricing.module.css'

export function Pricing() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const { openModal } = useDemoModal()

  const mainFeatures = [
    'Pełna optymalizacja SEO strony',
    'Pozycjonowanie na frazy lokalne',
    'Optymalizacja Google Moja Firma',
    'Zarządzanie opiniami Google',
    'Artykuły blogowe bez limitu',
    'Posty na social media bez limitu',
    'Raport miesięczny z wynikami',
  ]

  return (
    <section className={styles.pricing} id="cennik" ref={ref}>
      <Container>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Zostały 3 miejsca
          </div>
          <h2 className={styles.title}>Prosta cena. Zero niespodzianek.</h2>
          <p className={styles.subtitle}>
            Nie wierzymy w "wyceny indywidualne". Wierzymy w transparentność.
          </p>
        </div>

        <div className={`${styles.cards} ${isVisible ? styles.visible : ''}`}>
          {/* Main Plan */}
          <div className={styles.mainCard}>
            <div className={styles.cardHeader}>
              <span className={styles.popular}>Najpopularniejszy</span>
              <h3 className={styles.planName}>Pakiet Marketing</h3>
              <p className={styles.planDesc}>Wszystko czego potrzebujesz do zdobywania klientów online</p>
            </div>
            <div className={styles.priceBlock}>
              <span className={styles.price}>1499 zł brutto</span>
              <span className={styles.period}>/miesiąc</span>
            </div>
            <ul className={styles.features}>
              {mainFeatures.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className={styles.cardFooter}>
              <Button variant="primary" size="large" onClick={openModal} className={styles.cardButton}>
                Sprawdź dostępność
              </Button>
              <p className={styles.guarantee}>
                Bez umowy na lata. Wypowiedz kiedy chcesz.
              </p>
            </div>
          </div>

          {/* Sidebar Add-ons */}
          <div className={styles.sideCards}>
            {/* Website Add-on */}
            <div className={styles.sideCard}>
              <div className={styles.sideHeader}>
                <span className={styles.addon}>Dodatek</span>
                <h3 className={styles.sidePlanName}>Potrzebujesz strony?</h3>
                <p className={styles.sidePlanDesc}>
                  Jeśli Twoja strona wygląda jak z 2010 roku albo nie masz jej wcale — możemy pomóc.
                </p>
              </div>
              <div className={styles.sidePrice}>
                <span className={styles.sidePriceValue}>od 4999 zł brutto</span>
                <span className={styles.sidePriceNote}>jednorazowo</span>
              </div>
              <Button variant="outline" size="medium" onClick={openModal} className={styles.sideButton}>
                Zapytaj o stronę
              </Button>
            </div>

            {/* Branding Add-on */}
            <div className={styles.sideCard}>
              <div className={styles.sideHeader}>
                <span className={styles.addon}>Dodatek</span>
                <h3 className={styles.sidePlanName}>Potrzebujesz brandingu?</h3>
                <p className={styles.sidePlanDesc}>
                  Logo, wizytówki, papier firmowy — wszystko co potrzebne do profesjonalnego wizerunku.
                </p>
              </div>
              <div className={styles.sidePrice}>
                <span className={styles.sidePriceValue}>od 2999 zł brutto</span>
                <span className={styles.sidePriceNote}>jednorazowo</span>
              </div>
              <Button variant="outline" size="medium" onClick={openModal} className={styles.sideButton}>
                Zapytaj o branding
              </Button>
            </div>
          </div>
        </div>

        <div className={`${styles.ethics} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ethicsBadge}>
            <span className={styles.ethicsCheck}>✓</span>
            <span className={styles.ethicsText}>W pełni zgodne z Kodeksem Etyki Adwokackiej</span>
          </div>
          <p className={styles.ethicsDesc}>
            Żadnych agresywnych haseł ani gwarancji wyników. Budujemy autorytet przez edukację.
          </p>
        </div>

        <div className={`${styles.faq} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.faqTitle}>Często zadawane pytania</h3>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Czy muszę podpisywać długą umowę?</h4>
              <p>Nie. Umowa miesięczna z 30-dniowym okresem wypowiedzenia. Żadnych haczyków.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Kiedy zobaczę efekty?</h4>
              <p>Pierwsze wzrosty widoczności po 4-6 tygodniach. Znaczący wzrost zapytań po 3-4 miesiącach.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Czym różnicie się od zwykłej agencji SEO?</h4>
              <p>Specjalizujemy się wyłącznie w kancelariach prawnych. Znamy branżę, ograniczenia etyczne i specyfikę pozyskiwania klientów w prawie. Poza tym optymalizujemy pod AI (ChatGPT, Perplexity), czego większość agencji jeszcze nie robi.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Czy pracujecie z konkurencją?</h4>
              <p>Nigdy. Jedna specjalizacja, limitowana liczba kancelarii. Twój sukces to nasz sukces.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Co jeśli mam już stronę?</h4>
              <p>Super! Zoptymalizujemy ją w ramach pakietu. Strona od nas to opcja, nie wymóg.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Pricing
