import styles from"./Notifications.module.css"
import Header from "../../components/Header/Header.tsx";
import Notification from "../../components/Notification/Notification.tsx";
export  default function Notifications () {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Уведомления</h2>

                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Все</button>
                    <button className={styles.button}>Непрочитанные</button>
                </div>

                <div className={styles.notifications}>
                    <Notification />
                    <Notification />
                    <Notification />
                </div>
            </div>
        </>
    )
}