import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Container from '../common/Container'
import styles from './ProductShowcase.module.css'

export function ProductShowcase() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className={styles.showcase} ref={ref}>
      <Container>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            See item in action
          </h2>
          <p className={styles.subtitle}>
            A unified workspace that brings together customer data, communications, and AI-powered automation.
          </p>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.mainImage}>
            <div className={styles.imageWrapper}>
              <div className={styles.placeholderMain}>
                <div className={styles.pmHeader}>
                  <div className={styles.pmTabs}>
                    <span className={styles.pmTabActive}>Inbox</span>
                    <span className={styles.pmTab}>Contacts</span>
                    <span className={styles.pmTab}>Tasks</span>
                  </div>
                </div>
                <div className={styles.pmBody}>
                  <div className={styles.pmList}>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`${styles.pmListItem} ${i === 1 ? styles.pmListItemActive : ''}`}>
                        <div className={styles.pmAvatar}></div>
                        <div className={styles.pmListContent}>
                          <div className={styles.pmListTitle}></div>
                          <div className={styles.pmListSubtitle}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.pmDetail}>
                    <div className={styles.pmDetailHeader}>
                      <div className={styles.pmDetailAvatar}></div>
                      <div className={styles.pmDetailInfo}>
                        <div className={styles.pmDetailName}></div>
                        <div className={styles.pmDetailEmail}></div>
                      </div>
                    </div>
                    <div className={styles.pmDetailBody}>
                      <div className={styles.pmMessage}>
                        <div className={styles.pmLine}></div>
                        <div className={styles.pmLine}></div>
                        <div className={styles.pmLine} style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sideImages}>
            <div className={styles.sideImage}>
              <div className={styles.imageWrapper}>
                <div className={styles.placeholderSide}>
                  <div className={styles.psHeader}>
                    <span>AI Assistant</span>
                  </div>
                  <div className={styles.psBody}>
                    <div className={styles.psBubble}>
                      <div className={styles.psLine}></div>
                      <div className={styles.psLine} style={{ width: '80%' }}></div>
                    </div>
                    <div className={`${styles.psBubble} ${styles.psBubbleUser}`}>
                      <div className={styles.psLine}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sideImage}>
              <div className={styles.imageWrapper}>
                <div className={styles.placeholderSide}>
                  <div className={styles.psHeader}>
                    <span>Analytics</span>
                  </div>
                  <div className={styles.psBody}>
                    <div className={styles.psChart}>
                      <div className={styles.psBar} style={{ height: '40%' }}></div>
                      <div className={styles.psBar} style={{ height: '70%' }}></div>
                      <div className={styles.psBar} style={{ height: '55%' }}></div>
                      <div className={styles.psBar} style={{ height: '85%' }}></div>
                      <div className={styles.psBar} style={{ height: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductShowcase
