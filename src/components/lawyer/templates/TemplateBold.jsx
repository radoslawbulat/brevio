import { useEffect } from 'react'
import styles from './TemplateBold.module.css'

export default function TemplateBold({ lawyer }) {
  useEffect(() => {
    const reveals = document.querySelectorAll(`.${styles.reveal}`)

    const revealOnScroll = () => {
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementTop < windowHeight - 100) {
          element.classList.add(styles.active)
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()

    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  const initials = lawyer.name.split(' ').map(n => n[0]).join('')

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#top" className={styles.logo}>{lawyer.name}</a>
          <div className={styles.navLinks}>
            <a href="#uslugi">Usługi</a>
            <a href="#omnie">O mnie</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <a href="#kontakt" className={styles.navCta}>Konsultacja</a>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero} id="top">
        <div className={styles.heroGlow}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            Przyjmuję nowych klientów
          </div>
          <h1 className={styles.heroTitle}>
            Skuteczna pomoc<br />
            <span>prawna</span>
          </h1>
          <p className={styles.heroText}>
            {lawyer.title} {lawyer.name}. Wieloletnie doświadczenie w prawie
            cywilnym, rodzinnym i gospodarczym. Profesjonalizm i dyskrecja.
          </p>
          <div className={styles.heroActions}>
            <a href="#kontakt" className={styles.btnPrimary}>
              Umów konsultację
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.btnSecondary}>
              {lawyer.phone}
            </a>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>lat praktyki</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>spraw</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.statValue}>98%</span>
              <span className={styles.statLabel}>zadowolonych</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroAvatar}>
              <span>{initials}</span>
            </div>
            <div className={styles.heroCardInfo}>
              <span className={styles.cardTitle}>{lawyer.title}</span>
              <span className={styles.cardName}>{lawyer.name}</span>
              <span className={styles.cardReg}>{lawyer.registrationNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services} id="uslugi">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>Specjalizacje</span>
            <h2 className={styles.sectionTitle}>Zakres usług</h2>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { icon: '⚖️', title: 'Prawo cywilne', desc: 'Umowy, odszkodowania, spadki, windykacja' },
              { icon: '👨‍👩‍👧', title: 'Prawo rodzinne', desc: 'Rozwody, alimenty, podział majątku' },
              { icon: '🏢', title: 'Prawo gospodarcze', desc: 'Obsługa firm, spory, umowy handlowe' },
              { icon: '📋', title: 'Prawo pracy', desc: 'Reprezentacja w sporach pracowniczych' },
              { icon: '🛡️', title: 'Prawo karne', desc: 'Obrona i reprezentacja pokrzywdzonych' },
              { icon: '🏠', title: 'Nieruchomości', desc: 'Transakcje, najem, sprawy własnościowe' },
            ].map((service, index) => (
              <div key={index} className={`${styles.serviceCard} ${styles.reveal}`}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <span className={styles.serviceNum}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} id="omnie">
        <div className={styles.aboutInner}>
          <div className={`${styles.aboutVisual} ${styles.reveal}`}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutAvatar}>
                <span>{initials}</span>
              </div>
            </div>
            <div className={styles.aboutDecor}></div>
          </div>

          <div className={`${styles.aboutContent} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>O mnie</span>
            <h2 className={styles.sectionTitle}>{lawyer.name}</h2>
            <div className={styles.aboutText}>
              <p>
                Jestem {lawyer.title.toLowerCase()}em z wieloletnim doświadczeniem w prowadzeniu
                spraw cywilnych, rodzinnych i gospodarczych. Moim priorytetem jest skuteczna
                ochrona interesów klientów.
              </p>
              <p>
                Stawiam na transparentną komunikację i indywidualne podejście do każdej sprawy.
                Wierzę, że dobra relacja z klientem jest fundamentem sukcesu.
              </p>
              {lawyer.languages && lawyer.languages.length > 0 && (
                <p className={styles.aboutLanguages}>
                  Języki: polski, {lawyer.languages.join(', ')}
                </p>
              )}
            </div>

            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <div className={styles.featureIcon}>✓</div>
                <span>Przejrzyste warunki współpracy</span>
              </div>
              <div className={styles.aboutFeature}>
                <div className={styles.featureIcon}>✓</div>
                <span>Odpowiedź w ciągu 24h</span>
              </div>
              <div className={styles.aboutFeature}>
                <div className={styles.featureIcon}>✓</div>
                <span>Elastyczne terminy spotkań</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaContent}>
            <h2>Potrzebujesz pomocy prawnej?</h2>
            <p>Pierwsza konsultacja pozwoli ocenić Twoją sytuację</p>
          </div>
          <a href="#kontakt" className={styles.ctaButton}>
            Skontaktuj się
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact} id="kontakt">
        <div className={styles.contactInner}>
          <div className={`${styles.contactInfo} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>Kontakt</span>
            <h2 className={styles.sectionTitle}>Porozmawiajmy</h2>
            <p className={styles.contactText}>
              Opisz swoją sytuację, a skontaktuję się w ciągu 24 godzin.
            </p>

            <div className={styles.contactMethods}>
              <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.contactMethod}>
                <div className={styles.methodIcon}>📞</div>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Telefon</span>
                  <span className={styles.methodValue}>{lawyer.phone}</span>
                </div>
              </a>
              <a href={`mailto:${lawyer.email}`} className={styles.contactMethod}>
                <div className={styles.methodIcon}>✉️</div>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>E-mail</span>
                  <span className={styles.methodValue}>{lawyer.email}</span>
                </div>
              </a>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>📍</div>
                <div className={styles.methodContent}>
                  <span className={styles.methodLabel}>Adres</span>
                  <span className={styles.methodValue}>{lawyer.address}<br/>{lawyer.postalCode} {lawyer.city}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.contactForm} ${styles.reveal}`}>
            <h3 className={styles.formTitle}>Wyślij wiadomość</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Imię i nazwisko" />
                <input type="tel" placeholder="Telefon" />
              </div>
              <input type="email" placeholder="E-mail" />
              <textarea rows={4} placeholder="Opisz swoją sprawę..."></textarea>
              <button type="submit">
                Wyślij
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>{lawyer.name}</span>
            <p>{lawyer.title} • {lawyer.city}</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#uslugi">Usługi</a>
            <a href="#omnie">O mnie</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className={styles.footerCopy}>
            <p>© {new Date().getFullYear()} Wszelkie prawa zastrzeżone</p>
            <p>
              Projekt: <a href="https://brevio.pl" target="_blank" rel="noopener noreferrer">Brevio</a>
            </p>
          </div>
        </div>
      </footer>

      <div style={{ height: '80px' }}></div>
    </div>
  )
}
