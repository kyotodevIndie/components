import styles from '../Footer/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer} style={{ color:'#666' }}>
            <p>Coded by {' '}
                <a
                style={{ color:'#666' }}
                href="https://github.com/kyotodevindie"
                >
                Kyoto
                </a>
            </p>
        </footer>
    )
}
