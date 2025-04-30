import styles from './Date.module.css';
import Header from "../../components/Header/Header.tsx";
import Calendar from "../../components/Calendar/Calendar.tsx";

export default function Date () {
    return (
        <>
            <Header />
            <form className={styles.container}>
                <h2 className={styles.title}> Выберите удобный день </h2>
                <div>


                </div>

                <Calendar />

                <h2 className={styles.title2}>Введите почты друзей</h2>
                <span className={styles.text}>Если хотите поработать с друзьями — укажите их почты, мы отправим им QR-коды для входа</span>

                <div className={styles.inputContainer}>
                    <input type="email" placeholder="friend@example.com" className={styles.input}/>
                    <input type="email" placeholder="friend@example.com" className={styles.input}/>
                </div>
                <button className={styles.addFriend}>
                    <img src="/src/assets/addFriend.svg" className={styles.image}/>
                    <span className={styles.buttonText}> Добавить друга </span>
                </button>

            </form>
        </>
    )
}