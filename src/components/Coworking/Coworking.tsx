import styles from './Coworking.module.css';
import { Link } from 'react-router-dom';

interface Props {
    id: number;
    name: string;
    image: string;
    place: string;
    places: number;
    freePlaces: number;
}

export default function Coworking({ id, name, image, place, places, freePlaces }: Props) {
    const isAvailable = freePlaces > 0;

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={image} className={styles.coworkImage} />
            </div>

            <div className={styles.date}>
                <img src={isAvailable ? "/src/assets/freePlace.svg" : "/src/assets/busyPlace.svg"} />
                <span className={isAvailable ? styles.green : styles.red}>
          {isAvailable
              ? `Свободно ${freePlaces} из ${places} мест`
              : 'Мест нет'}
                </span>
            </div>

            <span className={styles.name}> {name} </span>

            <div className={styles.geoContainer}>
                <img src="/src/assets/IconGeo.svg" />
                <span className={styles.geo}> {place} </span>
            </div>

            <Link className={styles.linkButton} to={`/coworkingCard/${id}`}>
                <button className={styles.whiteButton}>Подробнее</button>
            </Link>
        </div>
    );
}