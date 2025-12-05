import { useEffect } from 'react'
import styles from './TemplateModern.module.css'

export default function TemplateModern({ lawyer }) {
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
  const firstName = lawyer.name.split(' ')[0]

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#top" className={styles.logo}>{firstName}.</a>
          <div className={styles.navLinks}>
            <a href="#uslugi">Usługi</a>
            <a href="#omnie">O mnie</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <a href="#kontakt" className={styles.navCta}>Umów spotkanie</a>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero} id="top">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>{lawyer.title} • {lawyer.city}</span>
            <h1 className={styles.heroTitle}>{lawyer.name}</h1>
            <p className={styles.heroText}>
              Skuteczna pomoc prawna oparta na wieloletnim doświadczeniu.
              Indywidualne podejście do każdej sprawy i każdego klienta.
            </p>
            <div className={styles.heroActions}>
              <a href="#kontakt" className={styles.btnPrimary}>
                Bezpłatna konsultacja
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.btnGhost}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {lawyer.phone}
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroAvatar}>
                <span>{initials}</span>
              </div>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaLabel}>{lawyer.registrationNumber}</span>
              </div>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statText}>lat praktyki</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statText}>wygranych spraw</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statText}>zaangażowania</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services} id="uslugi">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>Specjalizacje</span>
            <h2 className={styles.sectionTitle}>W czym mogę pomóc</h2>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { icon: '⚖️', title: 'Prawo cywilne', desc: 'Umowy, odszkodowania, sprawy majątkowe i spadkowe' },
              { icon: '👨‍👩‍👧', title: 'Prawo rodzinne', desc: 'Rozwody, alimenty, władza rodzicielska' },
              { icon: '🏢', title: 'Prawo gospodarcze', desc: 'Obsługa firm, umowy, spory handlowe' },
              { icon: '📋', title: 'Prawo pracy', desc: 'Reprezentacja pracowników i pracodawców' },
              { icon: '🛡️', title: 'Prawo karne', desc: 'Obrona i reprezentacja pokrzywdzonych' },
              { icon: '🏠', title: 'Nieruchomości', desc: 'Transakcje, najem, sprawy własnościowe' },
            ].map((service, index) => (
              <div key={index} className={`${styles.serviceCard} ${styles.reveal}`}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} id="omnie">
        <div className={styles.aboutInner}>
          <div className={`${styles.aboutContent} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>O mnie</span>
            <h2 className={styles.sectionTitle}>Doświadczenie w służbie klienta</h2>
            <div className={styles.aboutText}>
              <p>
                Jako {lawyer.title.toLowerCase()} z wieloletnim doświadczeniem wiem, że każda
                sprawa prawna to przede wszystkim sprawa ludzka. Dlatego stawiam na jasną
                komunikację i zrozumienie Twoich potrzeb.
              </p>
              <p>
                Specjalizuję się w prawie cywilnym, rodzinnym i gospodarczym. Moim celem
                jest nie tylko wygranie sprawy, ale znalezienie rozwiązania, które
                najlepiej służy Twoim interesom.
              </p>
              {lawyer.languages && lawyer.languages.length > 0 && (
                <p className={styles.languages}>
                  Prowadzę sprawy również w językach: {lawyer.languages.join(', ')}.
                </p>
              )}
            </div>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Przejrzyste zasady współpracy</span>
              </div>
              <div className={styles.aboutFeature}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Odpowiedź w ciągu 24 godzin</span>
              </div>
              <div className={styles.aboutFeature}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Elastyczne terminy spotkań</span>
              </div>
            </div>
          </div>
          <div className={`${styles.aboutVisual} ${styles.reveal}`}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutAvatar}>
                <span>{initials}</span>
              </div>
              <div className={styles.aboutInfo}>
                <h3>{lawyer.name}</h3>
                <p>{lawyer.title}</p>
                <span className={styles.aboutReg}>{lawyer.registrationNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>Jak działam</span>
            <h2 className={styles.sectionTitle}>Przejrzysty proces</h2>
          </div>

          <div className={styles.processSteps}>
            {[
              { num: '01', title: 'Konsultacja', desc: 'Bezpłatna rozmowa o Twojej sprawie i możliwych rozwiązaniach' },
              { num: '02', title: 'Strategia', desc: 'Przygotowanie planu działania dopasowanego do Twojej sytuacji' },
              { num: '03', title: 'Realizacja', desc: 'Skuteczna reprezentacja i regularne informowanie o postępach' },
              { num: '04', title: 'Rozwiązanie', desc: 'Osiągnięcie celu i zabezpieczenie Twoich interesów' },
            ].map((step, index) => (
              <div key={index} className={`${styles.processStep} ${styles.reveal}`}>
                <span className={styles.processNum}>{step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact} id="kontakt">
        <div className={styles.contactInner}>
          <div className={`${styles.contactContent} ${styles.reveal}`}>
            <span className={styles.sectionLabel}>Kontakt</span>
            <h2 className={styles.sectionTitle}>Porozmawiajmy</h2>
            <p className={styles.contactText}>
              Opisz swoją sprawę, a odezwę się w ciągu 24 godzin.
              Pierwsza konsultacja jest bezpłatna.
            </p>

            <div className={styles.contactMethods}>
              <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactMethodLabel}>Telefon</span>
                  <span className={styles.contactMethodValue}>{lawyer.phone}</span>
                </div>
              </a>
              <a href={`mailto:${lawyer.email}`} className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactMethodLabel}>E-mail</span>
                  <span className={styles.contactMethodValue}>{lawyer.email}</span>
                </div>
              </a>
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactMethodLabel}>Adres</span>
                  <span className={styles.contactMethodValue}>{lawyer.address}, {lawyer.city}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.contactForm} ${styles.reveal}`}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Imię i nazwisko" />
                </div>
                <div className={styles.formGroup}>
                  <input type="tel" placeholder="Telefon" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="E-mail" />
              </div>
              <div className={styles.formGroup}>
                <textarea rows={5} placeholder="Opisz swoją sprawę..."></textarea>
              </div>
              <button type="submit" className={styles.formSubmit}>
                Wyślij wiadomość
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
            <span className={styles.footerLogo}>{firstName}.</span>
            <p>{lawyer.title} • {lawyer.city}</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#uslugi">Usługi</a>
            <a href="#omnie">O mnie</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className={styles.footerCopy}>
            <p>© {new Date().getFullYear()} {lawyer.name}</p>
            <p>
              Strona: <a href="https://brevio.pl" target="_blank" rel="noopener noreferrer">Brevio</a>
            </p>
          </div>
        </div>
      </footer>

      <div style={{ height: '80px' }}></div>
    </div>
  )
}
