import { useState } from 'react'
import styles from './CustomizerBar.module.css'
import DownloadModal from './DownloadModal'

const HERO_IMAGES = [
  { id: 'hero', name: 'Portret', src: '/hero.jpg' },
  { id: 'city', name: 'Miasto', src: '/city.png' },
]

const COLOR_THEMES = [
  {
    id: 'elegant',
    name: 'Elegancki',
    colors: {
      ink: '#1a1a1a',
      paper: '#faf8f5',
      warm: '#f5f1eb',
      accent: '#8b7355',
      accentLight: '#c4a77d',
      dark: '#1a1a1a',
      light: '#faf8f5',
    }
  },
  {
    id: 'lawyer',
    name: 'Prawniczy',
    colors: {
      ink: '#f0f5f3',
      paper: '#1a2e2a',
      warm: '#243d37',
      accent: '#52b788',
      accentLight: '#7dd3a8',
      dark: '#1a2e2a',
      light: '#f0f5f3',
    }
  },
  {
    id: 'prestige',
    name: 'Prestiż',
    colors: {
      ink: '#f5f5f5',
      paper: '#0a0a0a',
      warm: '#1a1a1a',
      accent: '#d4af37',
      accentLight: '#ffd700',
      dark: '#0a0a0a',
      light: '#f5f5f5',
    }
  },
]

export default function CustomizerBar({ lawyerName }) {
  const [activeTheme, setActiveTheme] = useState('elegant')
  const [activeHero, setActiveHero] = useState('hero')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const applyHeroImage = (heroImage) => {
    const heroImg = document.querySelector('[data-hero-image]')
    if (heroImg) {
      heroImg.src = heroImage.src
    }
    setActiveHero(heroImage.id)
  }

  const applyTheme = (theme) => {
    // Find template page element by data attribute
    const templatePage = document.querySelector('[data-lawyer-template]')
    if (templatePage) {
      templatePage.style.setProperty('--color-ink', theme.colors.ink)
      templatePage.style.setProperty('--color-paper', theme.colors.paper)
      templatePage.style.setProperty('--color-warm', theme.colors.warm)
      templatePage.style.setProperty('--color-accent', theme.colors.accent)
      templatePage.style.setProperty('--color-accent-light', theme.colors.accentLight)
      templatePage.style.setProperty('--color-dark', theme.colors.dark)
      templatePage.style.setProperty('--color-light', theme.colors.light)
    }
    setActiveTheme(theme.id)
  }

  const handleDownload = () => {
    setIsModalOpen(true)
  }

  return (
    <div className={`${styles.bar} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.content}>
        <button
          className={styles.toggleBtn}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Zwiń' : 'Rozwiń'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isExpanded ? (
              <path d="M6 9l6 6 6-6"/>
            ) : (
              <path d="M18 15l-6-6-6 6"/>
            )}
          </svg>
        </button>

        <div className={styles.mainContent}>
          <div className={styles.info}>
            <span className={styles.label}>Podgląd strony dla:</span>
            <span className={styles.lawyerName}>{lawyerName}</span>
          </div>

          {/* Desktop: always visible, Mobile: toggle controlled */}
          <div className={`${styles.pickers} ${isExpanded ? styles.pickersExpanded : ''}`}>
            <div className={styles.colorSection}>
              <span className={styles.colorLabel}>Kolorystyka:</span>
              <div className={styles.colorPicker}>
                {COLOR_THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    className={`${styles.colorBtn} ${activeTheme === theme.id ? styles.active : ''}`}
                    onClick={() => applyTheme(theme)}
                    title={theme.name}
                    style={{
                      '--theme-ink': theme.colors.ink,
                      '--theme-accent': theme.colors.accent,
                    }}
                  >
                    <span className={styles.colorPreview}>
                      <span className={styles.colorDot} style={{ background: theme.colors.paper }}></span>
                      <span className={styles.colorDot} style={{ background: theme.colors.accent }}></span>
                    </span>
                    <span className={styles.colorName}>{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.colorSection}>
              <span className={styles.colorLabel}>Zdjęcie:</span>
              <div className={styles.colorPicker}>
                {HERO_IMAGES.map((hero) => (
                  <button
                    key={hero.id}
                    className={`${styles.colorBtn} ${activeHero === hero.id ? styles.active : ''}`}
                    onClick={() => applyHeroImage(hero)}
                    title={hero.name}
                  >
                    <span className={styles.heroPreview}>
                      <img src={hero.src} alt={hero.name} />
                    </span>
                    <span className={styles.colorName}>{hero.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <span className={styles.ctaText}>Chcesz tą stronę?</span>
            <button className={styles.ctaBtn} onClick={handleDownload}>
              Pobierz
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
