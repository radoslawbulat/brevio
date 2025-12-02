import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import styles from './Features.module.css'

const features = [
  {
    id: 'strategy',
    title: 'Strategia i audyt',
    description: 'Zaczynamy od analizy. Sprawdzamy co działa, co nie, gdzie jest potencjał. Na tej podstawie budujemy plan działania dopasowany do Twojej specjalizacji i miasta.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    id: 'seo',
    title: 'SEO i strona',
    description: 'Optymalizacja techniczna, szybkość, struktura. Pozycjonowanie na frazy lokalne. Widoczność tam gdzie klienci szukają dziś i będą szukać jutro — w AI Overview, ChatGPT, Perplexity.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    id: 'gmb',
    title: 'Google Maps',
    description: 'Twój profil na szczycie wyników lokalnych. Optymalizacja wizytówki, zdjęcia, posty, odpowiedzi na opinie. Tam gdzie klienci szukają prawnika "blisko mnie".',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    id: 'content',
    title: 'Treści na blog',
    description: 'Artykuły które odpowiadają na pytania Twoich potencjalnych klientów. Budują autorytet i pozycję w Google jednocześnie.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
      </svg>
    ),
  },
  {
    id: 'social',
    title: 'Social media',
    description: 'Regularne posty które pokazują Cię jako eksperta, nie jako kolejnego prawnika z stockowym zdjęciem.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
        <path d="M18 14h-8"/>
        <path d="M15 18h-5"/>
        <path d="M10 6h8v4h-8V6Z"/>
      </svg>
    ),
  },
  {
    id: 'branding',
    title: 'Materiały i branding',
    description: 'Dostęp do wszystkich materiałów graficznych kiedy tego potrzebujesz.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.42 0l6.58-6.58a1 1 0 0 0 0-1.42L12 2Z"/>
        <path d="M7 7h.01"/>
      </svg>
    ),
  },
]

export function Features() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className={styles.features} id="uslugi" ref={ref}>
      <Container>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Co dostajesz w pakiecie?</h2>
          <p className={styles.subtitle}>
            Wszystko czego potrzebujesz, żeby klienci sami do Ciebie trafiali.
          </p>
        </div>
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={styles.item}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className={styles.icon}>
                {feature.icon}
              </div>
              <h3 className={styles.itemTitle}>{feature.title}</h3>
              <p className={styles.itemDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features
