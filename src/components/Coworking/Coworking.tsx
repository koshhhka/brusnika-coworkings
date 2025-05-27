import styles from './Coworking.module.css'

export default function Coworking() {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src="/images/stockCowork1.jpg" className={styles.coworkImage}/>
            </div>

            <div className={styles.date}>
                <img src="/src/assets/freePlace.svg" />
                <span> Свободно 9 из 15 мест </span>
            </div>

            <span className={styles.name}> Коворкинг ИРИТ-РТФ </span>

            <div className={styles.geoContainer}>
                <img src="/src/assets/IconGeo.svg" />
                <span className={styles.geo}> Мира, 32,  аудитория Р-044</span>
            </div>

            <button className={styles.whiteButton}>
                Подробнее
            </button>
        </div>
    )
}