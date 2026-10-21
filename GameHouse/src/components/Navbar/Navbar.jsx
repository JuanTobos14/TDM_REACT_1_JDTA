
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header className={styles.navbar}>
            <a href="#inicio" className={styles.brand} aria-label="Game Home, inicio">
                <span>Game<span className={styles.brandAccent}>Home</span></span>
            </a>

            <nav className={styles.navigation} aria-label="Navegación principal">
                <a href="#inicio" className={styles.navLink}>
                    Inicio
                </a>

                <a href="#catalogo" className={styles.navLink}>
                    Catálogo
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
