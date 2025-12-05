import styles from './TemplateSwitcher.module.css'

const TEMPLATES = [
  { id: 'elegant', name: 'Elegancki', icon: '📜' },
  { id: 'classic', name: 'Klasyczny', icon: '🏛️' },
  { id: 'modern', name: 'Nowoczesny', icon: '✨' },
  { id: 'bold', name: 'Kreatywny', icon: '🎨' },
]

export default function TemplateSwitcher({ currentTemplate, onTemplateChange, lawyerName }) {
  return (
    <div className={styles.switcher}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.badge}>Podgląd</span>
          <span className={styles.name}>{lawyerName}</span>
        </div>

        <div className={styles.templates}>
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              className={`${styles.templateBtn} ${currentTemplate === template.id ? styles.active : ''}`}
              onClick={() => onTemplateChange(template.id)}
            >
              <span className={styles.icon}>{template.icon}</span>
              <span className={styles.label}>{template.name}</span>
            </button>
          ))}
        </div>

        <a
          href="/#cennik"
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chcę tę stronę
        </a>
      </div>
    </div>
  )
}
