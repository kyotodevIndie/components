import styles from '../GlitchEffect/GlitchEffect.module.css'

export default function GlitchEffect() {
    return (
        <section className={styles.container}>
            <div className={`${styles.content} ${styles.text}`}  data-text="kyoto">
                    kyoto
            </div>
        </section>
    )
}
