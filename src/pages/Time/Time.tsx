import  styles from './Time.module.css'
import Header from '../../components/Header/Header.tsx'

export default function Time() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2> Выберите время </h2>
                <div className={styles.chooseTime}>
                    <div className={styles.from}>
                        <span>С</span>

                    </div>
                </div>
            </div>
        </>
    )
}
