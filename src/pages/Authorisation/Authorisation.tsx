import styles from "./Authorisation.module.css"
import { useNavigate} from "react-router-dom";

export default  function Authorisation() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.container}>
                <img src="/src/assets/logo.svg" alt="Брусника"  className={styles.logo}/>
                <h2> Авторизация </h2>
                <div className={styles.authorization}>
                    <form className={styles.form}>
                        <div className={styles.inputContainer}>
                            <p className={styles.inputTitle}>Телефон или почта</p>
                            <input name="emailOrPhone" className={styles.input} placeholder="Введите телефон или почту"/>
                        </div>
                        <div  className={styles.inputContainer}>
                            <p className={styles.inputTitle}>Пароль</p>
                            <input name="password" className={styles.input} placeholder="Введите пароль"/>
                        </div>

                        <button onClick={() => navigate("/menu")} className={styles.redButton}>
                            Войти
                        </button>
                    </form>

                    <button onClick={() => navigate("/registration")} className={styles.blackButton}>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </>
    )
}