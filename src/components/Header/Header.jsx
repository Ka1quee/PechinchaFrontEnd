import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.cabecalho}>
            <ul className={styles.nav_link}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/register">Register</Link>
                </li>

                <li>
                    <Link to="/listagem">Listagem</Link>
                </li>

                <li>
                    <Link to="/homemarket">Homemarket</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;