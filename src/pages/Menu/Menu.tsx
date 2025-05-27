import styles from './Menu.module.css'
import Header from "../../components/Header/Header.tsx";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.container}>

                <img src="/src/assets/logo.svg" alt="Брусника"  className={styles.logo}/>

                <div className={styles.topicContainer}>
                    <p>Текущие требования</p>
                </div>

                <div className={styles.currentBookings}>
                    <div className={styles.currentBooking}>
                        <img src="/src/assets/coworkingImg1.png" alt="coworkImg" className={styles.coworkImg} />
                        <div>
                            <p className={styles.date}>33 января, 19:00-21:00</p>
                            <p className={styles.adress}>ул. Мира, 32, аудитория Р-044</p>
                        </div>
                        <img src="/src/assets/qrCircle.png" alt="qrCircle" className={styles.qrCircle} />
                    </div>

                    <div className={styles.currentBooking}>
                        <img src="/src/assets/coworkingImg2.png" alt="coworkImg" className={styles.coworkImg} />
                        <div>
                            <p className={styles.date}>33 января, 19:00-21:00</p>
                            <p className={styles.adress}>ул. Мира, 32, аудитория Р-044</p>
                        </div>
                        <img src="/src/assets/qrCircle.png" alt="qrCircle" className={styles.qrCircle} />
                    </div>

                    <div className={styles.currentBooking}>
                        <img src="/src/assets/coworkingImg3.png" alt="coworkImg" className={styles.coworkImg} />
                        <div>
                            <p className={styles.date}>33 января, 19:00-21:00</p>
                            <p className={styles.adress}>ул. Мира, 32, аудитория Р-044</p>
                        </div>
                        <img src="/src/assets/qrCircle.png" alt="qrCircle" className={styles.qrCircle} />
                    </div>

                    <button onClick={() => navigate("/currentBooking")} className={styles.showMore}>
                        Показать ещё →
                    </button>
                </div>

                <button onClick={() => navigate("/date")} className={styles.redButton}>
                    Забронировать коворкинг
                </button>

                <button onClick={() => navigate("/bookingHistory")} className={styles.blackButton}>
                    История бронирований
                </button>
            </div>
        </>
    )
}