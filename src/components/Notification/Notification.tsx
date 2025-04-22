import styles from './Notification.module.css';

export default function Notification() {
    return (
        <div className={styles.container}>
            <div className={styles.topLine}>
                <span className={styles.title}>Напоминание о бронровании</span>
                <span className={styles.date}>21.01.2025</span>
            </div>
            <span className={styles.description}>Напоминаем, что сегодня с 12:30 до 14:45 Вы планировали поработать в коворкинге  «Коворкинг ИРИТ-РТФ»  на Мира, 32. Желаем Вам продуктивной работы!</span>
        </div>
    )
}