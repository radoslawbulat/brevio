import styles from './Logo.module.css'

export function Logo({ className = '' }) {
  return (
    <a href="/" className={`${styles.logo} ${className}`}>
      <img src="/brevio.svg" alt="Brevio" className={styles.logoImg} />
    </a>
  )
}

export default Logo
