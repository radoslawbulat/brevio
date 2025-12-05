import { useEffect } from 'react'
import styles from './TemplateClassic.module.css'

export default function TemplateClassic({ lawyer }) {
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
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoIcon}>⚖</span>
            {lawyer.name}
          </a>
          <nav className={styles.nav}>
            <a href="#uslugi">Usługi</a>
            <a href="#omnie">O mnie</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.headerPhone}>
            <span className={styles.phoneIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            {lawyer.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero} id="top">
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span>{lawyer.registrationNumber}</span>
            </div>
            <h1 className={styles.heroTitle}>
              {lawyer.title}<br />
              <span>{lawyer.name}</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Kancelaria Adwokacka w {lawyer.city}u
            </p>
            <p className={styles.heroDescription}>
              Profesjonalna pomoc prawna oparta na doświadczeniu i indywidualnym
              podejściu do każdego klienta. Skuteczność potwierdzona latami praktyki.
            </p>
            <div className={styles.heroActions}>
              <a href="#kontakt" className={styles.btnPrimary}>
                Umów konsultację
              </a>
              <a href="#uslugi" className={styles.btnOutline}>
                Zakres usług
              </a>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroAvatar}>
              <span>{initials}</span>
            </div>
            <div className={styles.heroCardContent}>
              <div className={styles.heroStat}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>lat doświadczenia</span>
              </div>
              <div className={styles.heroDivider}></div>
              <div className={styles.heroStat}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>prowadzonych spraw</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className={styles.trustBar}>
        <div className={styles.trustInner}>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Tajemnica adwokacka</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Szybki kontakt</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            <span>Przejrzyste warunki</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            </svg>
            <span>Indywidualne podejście</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services} id="uslugi">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>Specjalizacje</span>
            <h2 className={styles.sectionTitle}>Zakres pomocy prawnej</h2>
            <p className={styles.sectionSubtitle}>
              Oferuję kompleksową obsługę prawną w kluczowych dziedzinach prawa
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { icon: '⚖️', title: 'Prawo cywilne', desc: 'Sprawy majątkowe, umowy, odszkodowania, sprawy spadkowe i windykacja należności.' },
              { icon: '👨‍👩‍👧', title: 'Prawo rodzinne', desc: 'Rozwody, separacje, alimenty, podział majątku, władza rodzicielska.' },
              { icon: '🏢', title: 'Prawo gospodarcze', desc: 'Obsługa firm, umowy handlowe, spory korporacyjne, due diligence.' },
              { icon: '📋', title: 'Prawo pracy', desc: 'Reprezentacja pracowników i pracodawców, umowy, zwolnienia.' },
              { icon: '🛡️', title: 'Prawo karne', desc: 'Obrona w sprawach karnych, reprezentacja pokrzywdzonych.' },
              { icon: '🏠', title: 'Nieruchomości', desc: 'Transakcje, najem, służebności, sprawy wieczystoksięgowe.' },
            ].map((service, index) => (
              <div key={index} className={`${styles.serviceCard} ${styles.reveal}`}>
                <div className={styles.serviceIcon}>{service.icon}</div>
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
          <div className={`${styles.aboutImage} ${styles.reveal}`}>
            <div className={styles.aboutImagePlaceholder}>
              <span>{initials}</span>
            </div>
          </div>
          <div className={`${styles.aboutContent} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>O mnie</span>
            <h2 className={styles.sectionTitle}>{lawyer.name}</h2>
            <div className={styles.aboutBio}>
              <p>
                Jako {lawyer.title.toLowerCase()} z wieloletnim doświadczeniem, specjalizuję się
                w prowadzeniu spraw cywilnych, gospodarczych i rodzinnych. Moją misją jest
                zapewnienie klientom najwyższej jakości pomocy prawnej.
              </p>
              <p>
                Wierzę, że skuteczna pomoc prawna opiera się na dokładnym zrozumieniu
                potrzeb klienta i transparentnej komunikacji. Każdą sprawę traktuję
                indywidualnie, szukając optymalnych rozwiązań.
              </p>
              {lawyer.languages && lawyer.languages.length > 0 && (
                <p>Prowadzę sprawy w językach: polski, {lawyer.languages.join(', ')}.</p>
              )}
            </div>
            <div className={styles.aboutMeta}>
              <div className={styles.aboutMetaItem}>
                <span className={styles.metaLabel}>Numer wpisu</span>
                <span className={styles.metaValue}>{lawyer.registrationNumber}</span>
              </div>
              <div className={styles.aboutMetaItem}>
                <span className={styles.metaLabel}>Lokalizacja</span>
                <span className={styles.metaValue}>{lawyer.city}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Potrzebujesz pomocy prawnej?</h2>
          <p className={styles.ctaText}>
            Pierwsza konsultacja pozwoli ocenić Twoją sytuację i zaproponować najlepsze rozwiązanie.
          </p>
          <a href="#kontakt" className={styles.ctaButton}>
            Skontaktuj się ze mną
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact} id="kontakt">
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={`${styles.contactInfo} ${styles.reveal}`}>
              <span className={styles.sectionLabel}>Kontakt</span>
              <h2 className={styles.sectionTitle}>Umów spotkanie</h2>
              <p className={styles.contactIntro}>
                Zapraszam do kontaktu telefonicznego, mailowego lub przez formularz.
                Odpowiadam w ciągu 24 godzin.
              </p>

              <div className={styles.contactDetails}>
                <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Telefon</span>
                    <span className={styles.contactValue}>{lawyer.phone}</span>
                  </div>
                </a>

                <a href={`mailto:${lawyer.email}`} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.contactLabel}>E-mail</span>
                    <span className={styles.contactValue}>{lawyer.email}</span>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Adres</span>
                    <span className={styles.contactValue}>{lawyer.address}<br/>{lawyer.postalCode} {lawyer.city}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.contactForm} ${styles.reveal}`}>
              <h3 className={styles.formTitle}>Wyślij wiadomość</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Imię i nazwisko</label>
                    <input type="text" placeholder="Jan Kowalski" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Telefon</label>
                    <input type="tel" placeholder="+48 500 000 000" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>E-mail</label>
                  <input type="email" placeholder="jan@example.com" />
                </div>
                <div className={styles.formGroup}>
                  <label>Wiadomość</label>
                  <textarea rows={4} placeholder="Opisz krótko swoją sprawę..."></textarea>
                </div>
                <button type="submit" className={styles.formSubmit}>
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>⚖ {lawyer.name}</span>
            <p>Kancelaria Adwokacka</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#uslugi">Usługi</a>
            <a href="#omnie">O mnie</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className={styles.footerCopy}>
            <p>© {new Date().getFullYear()} {lawyer.name}. Wszelkie prawa zastrzeżone.</p>
            <p className={styles.footerBrevio}>
              Strona stworzona przez <a href="https://brevio.pl" target="_blank" rel="noopener noreferrer">Brevio</a>
            </p>
          </div>
        </div>
      </footer>

      <div style={{ height: '80px' }}></div>
    </div>
  )
}
