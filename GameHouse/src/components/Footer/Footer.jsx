
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <a href="#inicio" className={styles.logo}>
                        Game<span>Home</span>
                    </a>

                    <p>
                        Tu próximo juego favorito está aquí.
                        Descubre nuevas aventuras, explora diferentes
                        géneros y organiza tu colección.
                    </p>
                </div>

                <nav className={styles.links} aria-label="Navegación del pie de página">
                    <h3>Navegación</h3>
                    <a href="#inicio">Inicio</a>
                    <a href="#catalogo">Catálogo</a>
                </nav>

                <div className={styles.info}>
                    <h3>Sobre Game Home</h3>
                    <p>
                        Una plataforma para descubrir videojuegos,
                        explorar nuevas experiencias y guardar tus favoritos.
                    </p>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>
                    © {new Date().getFullYear()} Game Home.
                    Proyecto académico de desarrollo web.
                </p>

                <a href="#catalogo" className={styles.backLink}>
                    Explorar juegos ↑
                </a>
            </div>
        </footer>
    );
}

export default Footer;
