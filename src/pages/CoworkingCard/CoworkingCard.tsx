import Header from "../../components/Header/Header.tsx";
import styles from './CoworkingCard.module.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CoworkingItem {
    id: number;
    name: string;
    image: string;
    place: string;
    description: string;
    places: number;
    freePlaces: number;
    categories: string[];
}

export default function CoworkingCard() {
    const { id } = useParams();
    const [coworking, setCoworking] = useState<CoworkingItem | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3001/coworkings/${id}`)
            .then(res => res.json())
            .then(data => setCoworking(data))
            .catch(err => console.error("Ошибка при загрузке коворкинга:", err));
    }, [id]);

    if (!coworking) return <div>Загрузка...</div>;

    return (
        <>
            <Header />
            <img src={coworking.image} className={styles.image} />
            <div className={styles.container}>
                <h1 className={styles.title}>{coworking.name}</h1>
                <ul className={styles.categories}>
                    {coworking.categories.map((cat, idx) => (
                        <li key={idx} className={styles.category}>{cat}</li>
                    ))}
                </ul>
                <div className={styles.adressContainer}>
                    <img src="/src/assets/IconGeoBlack.svg" />
                    <span className={styles.address}>{coworking.place}</span>
                </div>
                <div className={styles.isFree}>
                    <img src={coworking.freePlaces > 0 ? "/src/assets/freePlace.svg" : "/src/assets/busyPlace.svg"} />
                    <span className={coworking.freePlaces > 0 ? styles.green : styles.red}>
                        {coworking.freePlaces > 0
                            ? `Свободно ${coworking.freePlaces} из ${coworking.places} мест`
                            : 'Мест нет'}
                    </span>
                </div>

                <p className={styles.description}>{coworking.description}</p>

                <Link className={styles.redButton} to={'/time'}>
                    <span> Перейти к выбору времени </span>
                </Link>
            </div>
        </>
    );
}