import styles from './Date.module.css';
import Header from "../../components/Header/Header.tsx";
import Calendar from "../../components/Calendar/Calendar.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from 'uuid';

export default function Date() {
    const [emailFields, setEmailFields] = useState([{ id: v4(), value: '' }]);

    const addEmailField = () => {
        setEmailFields(prev => [...prev, {
            id: v4(),
            value: ''
        }]);
    };

    const removeEmailField = (id: string) => {
        setEmailFields(prev => prev.filter(email => email.id !== id));
    }

    const handleEmailChange = (id: string, value: string) => {
        setEmailFields(prev => prev.map(email =>
            email.id === id ? { ...email, value } : email));
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
                        <div className={styles.inputField} key={field.id}>
                            <input
                                type="email"
                                placeholder="friend@example.com"
                                className={styles.input}
                                value={field.value}
                                onChange={(e) => handleEmailChange(field.id, e.target.value)}
                            />
                            <button type="button" className={styles.removeFriend} onClick={() => removeEmailField(field.id)}>
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <button
                        type="button"
                        className={styles.addFriend}
                        onClick={addEmailField}
                    >
                        <img src="/src/assets/addFriend.svg" className={styles.image}/>
                        <span className={styles.buttonText}>Добавить друга</span>
                    </button>
                </div>

                <Link className={styles.redButton} to={'/chooseCoworking'}>
                    <span> Забронировать коворкинг </span>
                </Link>
            </form>
        </>
    );
}