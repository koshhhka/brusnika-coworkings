import styles from './Header.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <header className={styles.appHeader}>
            {location.pathname !== '/menu' && (
                <button onClick={handleGoBack} className={styles.back}></button>
            )}
            <button onClick={() => navigate("/notifications")} className={styles.notifications}></button>
            <button className={styles.account}></button>
        </header>
    )
}