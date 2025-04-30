import styles from './BookingHistory.module.css'
import Header from "../../components/Header/Header.tsx";
import Coworking from "../../components/Coworking/Coworking.tsx";

export default function BookingHistory() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}> История бронирований </h2>
                <div className={styles.inputContainer}>
                    <div className={styles.input}>
                        <img src="/src/assets/IconSearch.svg" className={styles.icon}/>
                        <input placeholder="Введите название или адрес" className={styles.inputStroke}/>
                    </div>
                    <button className={styles.option}></button>
                </div>

                <div className={styles.coworkings}>
                    <Coworking />
                    <Coworking />
                    <Coworking />
                </div>

            </div>
        </>
    )
}