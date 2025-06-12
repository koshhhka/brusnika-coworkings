import styles from './ChooseCoworking.module.css'
import Header from "../../components/Header/Header.tsx";
import Coworking from "../../components/Coworking/Coworking.tsx";
import { useState, useEffect } from "react";

interface CoworkingItem {
    id: number;
    name: string;
    image: string;
    place: string;
    places: number;
    freePlaces: number;
}

export default function ChooseCoworking() {
    const [coworkings, setCoworkings] = useState<CoworkingItem[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/coworkings')
            .then((res) => res.json())
            .then((data) => setCoworkings(data))
            .catch((err) => console.error('Ошибка загрузки коворкингов:', err));
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}> Выберите коворкинг </h2>

                <div className={styles.inputContainer}>
                    <div className={styles.input}>
                        <img src="/src/assets/IconSearch.svg" className={styles.icon}/>
                        <input placeholder="Введите название или адрес" className={styles.inputStroke}/>
                    </div>
                    <button className={styles.option}></button>
                </div>

                <div className={styles.coworkings}>
                    {coworkings.map((coworking) => (
                        <Coworking id={coworking.id} name={coworking.name} image={coworking.image} place={coworking.place} places={coworking.places} freePlaces={coworking.freePlaces}></Coworking>
                    ))}
                </div>

            </div>
        </>
    )
}