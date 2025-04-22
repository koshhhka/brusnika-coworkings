import styles from "./Registration.module.css"

export default  function Registration() {
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

                        <button className={styles.redButton}>
                            Войти
                        </button>

                        <button className={styles.blackButton}>
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}