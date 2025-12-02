import styles from './Container.module.css'

export function Container({ children, className = '', size = 'default', ...props }) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
