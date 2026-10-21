
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.heroContent}>
                <p className={styles.heroTag}>
                    TU PRÓXIMA AVENTURA COMIENZA AQUÍ
                </p>

                <h1 className={styles.title}>
                    Encuentra tu próximo{' '}
                    <span>juego favorito</span>
                </h1>

                <p className={styles.heroDescription}>
                    Explora videojuegos de diferentes géneros y plataformas.
                    Descubre nuevas aventuras y organiza tu colección en un solo lugar.
                </p>

                <a href="#catalogo" className={styles.heroButton}>
                    Explorar catálogo <span>→</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;
