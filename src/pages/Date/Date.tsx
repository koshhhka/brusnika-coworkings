import styles from './Date.module.css';
import Header from "../../components/Header/Header.tsx";
import Calendar from "../../components/Calendar/Calendar.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Date() {
    const navigate = useNavigate();
    const [emailFields, setEmailFields] = useState([{ id: 1, value: '' }]);

    const addEmailField = () => {
        const newId = emailFields.length > 0 ? Math.max(...emailFields.map(field => field.id)) + 1 : 1;
        setEmailFields([...emailFields, { id: newId, value: '' }]);
    };

    const handleEmailChange = (id: number, value: string) => {
        setEmailFields(emailFields.map(field =>
            field.id === id ? { ...field, value } : field
        ));
    };

    return (
        <>
            <Header />
            <form className={styles.container}>
                <h2 className={styles.title}>Выберите удобный день</h2>
                <Calendar />

                <h2 className={styles.title2}>Введите почты друзей</h2>
                <span className={styles.text}>
                    Если хотите поработать с друзьями — укажите их почты, мы отправим им QR-коды для входа
                </span>

                <div className={styles.inputContainer}>
                    {emailFields.map((field) => (
                        <input
                            key={field.id}
                            type="email"
                            placeholder="friend@example.com"
                            className={styles.input}
                            value={field.value}
                            onChange={(e) => handleEmailChange(field.id, e.target.value)}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    className={styles.addFriend}
                    onClick={addEmailField}
                >
                    <img src="/src/assets/addFriend.svg" className={styles.image}/>
                    <span className={styles.buttonText}>Добавить друга</span>
                </button>

                <button onClick={() => navigate("/chooseCoworking")} className={styles.redButton}>
                    Забронировать коворкинг
                </button>
            </form>
        </>
    );
}