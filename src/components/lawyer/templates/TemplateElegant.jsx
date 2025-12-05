import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './TemplateElegant.module.css'
import { SERVICES } from '../../../data/services'

export default function TemplateElegant({ lawyer }) {
  const { lawyerSlug } = useParams()

  useEffect(() => {
    // Reveal on scroll using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll(`.${styles.reveal}`)
      reveals.forEach(element => observer.observe(element))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const initials = lawyer.name.split(' ').map(n => n[0]).join('')
  const firstName = lawyer.name.split(' ')[0]
  const isMan = lawyer.gender === 'man'
  const heroImage = isMan ? '/heroman.png' : '/hero.jpg'
  const aboutImage = isMan ? '/aboutmeman.png' : '/aboutme.png'

  return (
    <div className={styles.page} data-lawyer-template="elegant">
      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#top" className={styles.logo}>{lawyer.name}</a>
        <ul className={styles.navLinks}>
          <li><a href="#uslugi">Usługi</a></li>
          <li><a href="#omnie">O mnie</a></li>
          <li><a href="#wyrozniki">Dlaczego ja</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <a href="#kontakt" className={styles.navContact}>Umów wizytę</a>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} id="top">
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Kancelaria Adwokacka</span>
          <h1 className={styles.heroTitle}>
            Profesjonalna<br />pomoc <em>prawna</em>
          </h1>
          <p className={styles.heroDescription}>
            Kompleksowa obsługa prawna dla klientów indywidualnych i przedsiębiorców.
            Reprezentacja przed sądami, mediacje i doradztwo.
          </p>
          <div className={styles.heroCta}>
            <a href="#kontakt" className={styles.btnPrimary}>
              Bezpłatna konsultacja
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#uslugi" className={styles.btnSecondary}>Zobacz usługi</a>
          </div>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollLine}></div>
            <span>Przewiń</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageContainer}>
            <img src={heroImage} alt={lawyer.name} className={styles.heroImage} data-hero-image />
          </div>
          <div className={styles.heroDecoration}></div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} id="uslugi">
        <div className={`${styles.sectionHeader} ${styles.reveal}`}>
          <div>
            <span className={styles.sectionTag}>Zakres usług</span>
            <h2 className={styles.sectionTitle}>Czym mogę Ci pomóc?</h2>
          </div>
          <p className={styles.sectionDescription}>
            Oferuję wszechstronną pomoc prawną, od przygotowania dokumentów,
            przez reprezentację w sądzie, po mediacje i stałą obsługę firm.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/${lawyerSlug}/uslugi/${service.id}`}
              className={`${styles.serviceCard} ${styles.reveal}`}
            >
              <span className={styles.serviceNumber}>{service.num}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.shortDesc}</p>
              <span className={styles.serviceLink}>
                Dowiedz się więcej
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about} id="omnie">
        <div className={styles.aboutContainer}>
          <div className={`${styles.aboutImageWrapper} ${styles.reveal}`}>
            <img src={aboutImage} alt={lawyer.name} className={styles.aboutImage} />
            <div className={styles.aboutFrame}></div>
          </div>
          <div className={`${styles.aboutContent} ${styles.reveal}`}>
            <span className={styles.sectionTag}>O mnie</span>
            <h2 className={styles.sectionTitle}>{lawyer.title} {lawyer.name}</h2>
            <p className={styles.aboutText}>
              Jestem {lawyer.title.toLowerCase()}em z wieloletnim doświadczeniem.
              Moim priorytetem jest indywidualne podejście do każdej sprawy i każdego klienta.
              Wierzę, że dobra komunikacja i zrozumienie potrzeb to podstawa skutecznej pomocy prawnej.
            </p>
            <p className={styles.aboutText}>
              Prowadzę sprawy z zakresu prawa cywilnego, rodzinnego, gospodarczego i karnego.
              Zapewniam profesjonalne wsparcie na każdym etapie postępowania.
            </p>
            {lawyer.languages && lawyer.languages.length > 0 && (
              <p className={styles.aboutText}>
                Prowadzę sprawy również w językach: {lawyer.languages.join(', ')}.
              </p>
            )}
            <div className={styles.credentials}>
              <div className={styles.credential}>
                <span className={styles.credentialValue}>{lawyer.title}</span>
                <span className={styles.credentialLabel}>Izba Adwokacka</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credentialValue}>{lawyer.registrationNumber}</span>
                <span className={styles.credentialLabel}>Nr wpisu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="wyrozniki">
        <div className={`${styles.sectionHeader} ${styles.reveal}`}>
          <div>
            <span className={styles.sectionTag}>Dlaczego warto</span>
            <h2 className={styles.sectionTitle}>Co wyróżnia moją kancelarię</h2>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {[
            {
              icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></>,
              title: 'Elastyczne terminy',
              text: 'Rozumiem, że w tygodniu brakuje czasu. Dlatego oferuję elastyczne godziny spotkań.'
            },
            {
              icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></>,
              title: 'Przejrzyste zasady',
              text: 'Jasne warunki współpracy i transparentne rozliczenia od pierwszego spotkania.'
            },
            {
              icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>,
              title: 'Szybki kontakt',
              text: 'Odpowiadam na wiadomości w ciągu 24 godzin w dni robocze.'
            },
            {
              icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>,
              title: 'Indywidualne podejście',
              text: 'Każda sprawa jest inna. Dlatego każdemu klientowi poświęcam pełną uwagę.'
            },
          ].map((feature, index) => (
            <div key={index} className={`${styles.feature} ${styles.reveal}`}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="kontakt">
        <div className={styles.contactContainer}>
          <div className={`${styles.contactInfo} ${styles.reveal}`}>
            <span className={styles.sectionTag}>Kontakt</span>
            <h2 className={styles.sectionTitle}>Porozmawiajmy o Twojej sprawie</h2>

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
                <label className={styles.formLabel} htmlFor="message">Treść wiadomości</label>
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
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>{lawyer.title} {lawyer.name}</span>
            <p className={styles.footerTagline}>
              Profesjonalna pomoc prawna dla klientów indywidualnych i biznesowych.
            </p>
            <div className={styles.footerCredentials}>
              <span>Izba Adwokacka</span>
              <span className={styles.footerDot}>•</span>
              <span>Nr wpisu: {lawyer.registrationNumber}</span>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Usługi</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#uslugi">Prawo cywilne</a></li>
              <li><a href="#uslugi">Prawo rodzinne</a></li>
              <li><a href="#uslugi">Prawo gospodarcze</a></li>
              <li><a href="#uslugi">Prawo pracy</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Kontakt</h4>
            <ul className={styles.footerContact}>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`}>{lawyer.phone}</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${lawyer.email}`}>{lawyer.email}</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{lawyer.address}, {lawyer.city}</span>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Godziny</h4>
            <ul className={styles.footerHours}>
              <li><span>Poniedziałek - Piątek</span><span>9:00 - 17:00</span></li>
              <li><span>Sobota</span><span>Po umówieniu</span></li>
              <li><span>Niedziela</span><span>Zamknięte</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>
            © {new Date().getFullYear()} Kancelaria {lawyer.title}a {lawyer.name}. Wszelkie prawa zastrzeżone.
          </span>
          <div className={styles.footerLegal}>
            <a href="#kontakt">Polityka prywatności</a>
            <a href="#kontakt">Regulamin</a>
          </div>
        </div>
      </footer>

      {/* Spacer for bottom customizer bar */}
      <div style={{ height: '60px' }}></div>

    </div>
  )
}
