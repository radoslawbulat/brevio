import { useState } from 'react'
import styles from './Marquee.module.css'

const items = [
  { text: 'Tylko 1 kancelaria na miasto' },
  { text: 'Bez długich umów' },
  { text: 'Stała cena 1499 zł/msc' },
  { text: 'Limitowana liczba miejsc' },
  { text: 'Dedykowany opiekun' },
  { text: 'Wyniki, nie obietnice' },
]

export function Marquee({ direction = 'left', speed = 'normal' }) {
  const [isPaused, setIsPaused] = useState(false)

  const speedClass = {
    slow: styles.slow,
    normal: styles.normal,
    fast: styles.fast,
  }[speed]

  return (
    <section className={styles.marquee}>
      <div
        className={`${styles.track} ${speedClass} ${direction === 'right' ? styles.reverse : ''} ${isPaused ? styles.paused : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate content for seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className={styles.content}>
            {items.map((item, index) => (
              <div key={`${setIndex}-${index}`} className={styles.item}>
                <span className={styles.dot}></span>
                <span className={styles.text}>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee
