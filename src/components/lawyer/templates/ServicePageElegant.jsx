import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePageElegant.module.css'

export default function ServicePageElegant({ lawyer, service, lawyerSlug }) {
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
        <Link to={`/${lawyerSlug}?t=elegant`} className={styles.logo}>{lawyer.name}</Link>
        <ul className={styles.navLinks}>
          <li><Link to={`/${lawyerSlug}?t=elegant#uslugi`}>Usługi</Link></li>
          <li><Link to={`/${lawyerSlug}?t=elegant#omnie`}>O mnie</Link></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <a href="#kontakt" className={styles.navContact}>Umów wizytę</a>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link to={`/${lawyerSlug}?t=elegant`} className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Wróć do strony głównej
          </Link>
          <span className={styles.heroTag}>{service.num} — Zakres usług</span>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroSubtitle}>{service.heroSubtitle}</p>
          <p className={styles.heroDescription}>{service.heroDescription}</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroIcon}>
            <span>{service.icon}</span>
          </div>
          <div className={styles.heroDecoration}></div>
        </div>
      </section>

      {/* Service Sections */}
      <section className={styles.content}>
        <div className={styles.sectionsGrid}>
          {service.sections.map((section, index) => (
            <div key={index} className={`${styles.sectionCard} ${styles.reveal}`}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>{String(index + 1).padStart(2, '0')}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>
              <ul className={styles.sectionList}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.sectionItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={`${styles.ctaContent} ${styles.reveal}`}>
          <h2 className={styles.ctaTitle}>{service.cta}</h2>
          <div className={styles.ctaActions}>
            <a href="#kontakt" className={styles.btnPrimary}>
              Bezpłatna konsultacja
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`} className={styles.btnSecondary}>
              {lawyer.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className={styles.otherServices}>
        <div className={`${styles.otherHeader} ${styles.reveal}`}>
          <span className={styles.sectionTag}>Pozostałe usługi</span>
          <h2 className={styles.otherTitle}>Inne obszary praktyki</h2>
        </div>
        <div className={styles.otherGrid}>
          {[
            { id: 'prawo-cywilne', num: '01', title: 'Prawo cywilne', icon: '⚖️' },
            { id: 'prawo-rodzinne', num: '02', title: 'Prawo rodzinne', icon: '👨‍👩‍👧' },
            { id: 'prawo-gospodarcze', num: '03', title: 'Prawo gospodarcze', icon: '🏢' },
            { id: 'prawo-pracy', num: '04', title: 'Prawo pracy', icon: '📋' },
            { id: 'prawo-karne', num: '05', title: 'Prawo karne', icon: '🛡️' },
            { id: 'nieruchomosci', num: '06', title: 'Nieruchomości', icon: '🏠' },
          ].filter(s => s.id !== service.id).map((s) => (
            <Link
              key={s.id}
              to={`/${lawyerSlug}/uslugi/${s.id}?t=elegant`}
              className={`${styles.otherCard} ${styles.reveal}`}
            >
              <span className={styles.otherIcon}>{s.icon}</span>
              <span className={styles.otherNum}>{s.num}</span>
              <h3 className={styles.otherCardTitle}>{s.title}</h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="kontakt">
        <div className={styles.contactContainer}>
          <div className={`${styles.contactInfo} ${styles.reveal}`}>
            <span className={styles.sectionTag}>Kontakt</span>
            <h2 className={styles.contactTitle}>Porozmawiajmy o Twojej sprawie</h2>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Telefon</span>
              <span className={styles.contactValue}>
                <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`}>{lawyer.phone}</a>
              </span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>
                <a href={`mailto:${lawyer.email}`}>{lawyer.email}</a>
              </span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Adres</span>
              <span className={styles.contactValue}>
                {lawyer.address}<br />{lawyer.postalCode} {lawyer.city}
              </span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Godziny przyjęć</span>
              <span className={styles.contactValue}>
                Pon-Pt: 9:00-17:00<br />Sobota: po umówieniu
              </span>
            </div>
          </div>

          <div className={`${styles.contactFormWrapper} ${styles.reveal}`}>
            <h3 className={styles.formTitle}>Wyślij wiadomość</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">Imię i nazwisko</label>
                <input type="text" id="name" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">Email</label>
                <input type="email" id="email" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">Opisz swoją sprawę dotyczącą: {service.title.toLowerCase()}</label>
                <textarea id="message" className={`${styles.formInput} ${styles.formTextarea}`}></textarea>
              </div>
              <button type="submit" className={styles.formSubmit}>Wyślij wiadomość</button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className={`${styles.mapWrapper} ${styles.reveal}`}>
          <div className={styles.mapOverlay}></div>
          <div className={styles.mapPin}>
            <div className={styles.mapPinInner}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.mapPinPulse}></div>
          </div>
          <iframe
            title="Lokalizacja kancelarii"
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${lawyer.address}, ${lawyer.postalCode} ${lawyer.city}, Poland`)}&output=embed&z=15`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerLogo}>{lawyer.title} {lawyer.name}</span>
          <ul className={styles.footerLinks}>
            <li><Link to={`/${lawyerSlug}?t=elegant#uslugi`}>Usługi</Link></li>
            <li><Link to={`/${lawyerSlug}?t=elegant#omnie`}>O mnie</Link></li>
            <li><Link to={`/${lawyerSlug}?t=elegant#kontakt`}>Kontakt</Link></li>
          </ul>
          <span className={styles.footerCopy}>
            © {new Date().getFullYear()} Kancelaria {lawyer.title}a {lawyer.name}
          </span>
        </div>
      </footer>

      {/* Brevio badge */}
      <div className={styles.brevioBadge}>
        Strona stworzona przez <a href="https://brevio.pl" target="_blank" rel="noopener noreferrer">Brevio</a>
      </div>

      {/* Spacer for template switcher */}
      <div style={{ height: '80px' }}></div>
    </div>
  )
}
