import Container from '../common/Container'
import Logo from '../common/Logo'
import styles from './Footer.module.css'

export function Footer() {
  const footerLinks = [
    {
      title: 'Usługi',
      links: [
        { label: 'SEO lokalne', href: '#uslugi' },
        { label: 'Google Maps', href: '#uslugi' },
        { label: 'Content marketing', href: '#uslugi' },
        { label: 'Social media', href: '#uslugi' },
      ],
    },
    {
      title: 'Firma',
      links: [
        { label: 'Jak to działa', href: '#jak-to-dziala' },
        { label: 'Cennik', href: '#cennik' },
        { label: 'Umów demo', href: '#demo' },
      ],
    },
  ]

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>
              Marketing kancelarii prawnych w erze AI.<br />
              Klienci znajdują Ciebie, nie Ty ich.
            </p>
          </div>

          <div className={styles.links}>
            {footerLinks.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{group.title}</h4>
                <ul className={styles.linkList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Brevio. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
