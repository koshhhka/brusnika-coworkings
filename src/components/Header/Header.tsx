import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.appHeader}>
            {/*<button className={styles.back}></button>*/}
            <button className={styles.notifications}></button>
            <button className={styles.account}></button>
        </header>
    )
}