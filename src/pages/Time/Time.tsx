import  styles from './Time.module.css'
import Header from '../../components/Header/Header.tsx'


export default function Time() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2> Выберите время </h2>
                <h2 className={styles.date}> 31 Февраля </h2>
                <div className={styles.chooseTime}>
                    <div className={styles.from}>
                        <span className={styles.text}>С</span>
                        <select className={styles.select}>
                            <option className={styles.time}>08:00</option>
                            <option className={styles.time}>09:00</option>
                            <option className={styles.time}>10:00</option>
                            <option className={styles.time}>11:00</option>
                        </select>
                    </div>
                    <div className={styles.to}>
                        <span className={styles.text}>До</span>
                        <select className={styles.select}>
                            <option className={styles.time}>15:00</option>
                            <option className={styles.time}>16:00</option>
                            <option className={styles.time}>17:00</option>
                            <option className={styles.time}>18:00</option>
                        </select>
                    </div>
                </div>

                <div className={styles.settings}>
                    <button className={styles.less}></button>

                    <button className={styles.more}></button>
                </div>
                <div className={styles.choosePlaces}>
                    <button className={styles.place}></button>
                </div>
            </div>
        </>
    )
}
