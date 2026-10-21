
import { useState } from 'react';
import styles from './Catalog.module.css';

const videojuegos = [
    {
        id: 1,
        nombre: 'Hollow Knight: Silksong',
        genero: 'Metroidvania / Acción',
        plataforma: 'PC, PlayStation, Xbox, Nintendo Switch',
        descripcion: 'Acompaña a Hornet en una aventura desafiante por un reino misterioso lleno de enemigos, secretos y poderosos jefes.',
        emoji: '🕷️'
    },
    {
        id: 2,
        nombre: 'Minecraft',
        genero: 'Sandbox',
        plataforma: 'PC, PlayStation, Xbox, Switch',
        descripcion: 'Construye, explora y crea tu propio mundo con bloques.',
        emoji: '⛏️'
    },
    {
        id: 3,
        nombre: 'God of War Ragnarök',
        genero: 'Acción',
        plataforma: 'PlayStation, PC',
        descripcion: 'Acompaña a Kratos y Atreus en una aventura mitológica.',
        emoji: '🪓'
    },
    {
        id: 4,
        nombre: 'Forza Horizon 5',
        genero: 'Carreras',
        plataforma: 'PC, Xbox, PlayStation',
        descripcion: 'Compite en emocionantes carreras por los paisajes de México.',
        emoji: '🏎️'
    },
    {
        id: 5,
        nombre: 'Plantas vs. Zombies',
        genero: 'Estrategia / Tower Defense',
        plataforma: 'PC, PlayStation, Xbox, Móvil',
        descripcion: 'Defiende tu jardín de las hordas de zombis con plantas increíbles y mucha estrategia.',
        emoji: '🌻'
    },
    {
        id: 6,
        nombre: 'Peppa Pig: Un mundo de aventuras',
        genero: 'Aventura / Infantil',
        plataforma: 'PC, PlayStation, Xbox, Nintendo Switch',
        descripcion: 'Explora el mundo con Peppa Pig, visita lugares increíbles y disfruta de divertidas aventuras para toda la familia.',
        emoji: '🐷'
    }
];

function Catalog() {
    const [favoritos, setFavoritos] = useState([]);
    const [soloFavoritos, setSoloFavoritos] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const [genero, setGenero] = useState('Todos');

    function toggleFavorito(id) {
        setFavoritos((actuales) =>
            actuales.includes(id)
                ? actuales.filter((favorito) => favorito !== id)
                : [...actuales, id]
        );
    }

    const generos = [
        'Todos',
        ...new Set(videojuegos.map((juego) => juego.genero)),
    ];

    const juegosFiltrados = videojuegos.filter((juego) => {
        const coincideNombre = juego.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase());

        const coincideGenero =
            genero === 'Todos' || juego.genero === genero;

        const coincideFavoritos =
            !soloFavoritos || favoritos.includes(juego.id);

        return coincideNombre && coincideGenero && coincideFavoritos;
    });

    return (
        <section className={styles.catalogo} id="catalogo">
            <div className={styles.catalogoHeader}>
                <div>
                    <p className={styles.catalogoTag}>
                        DESCUBRE TU PRÓXIMA AVENTURA
                    </p>

                    <h2 className={styles.titulo}>
                        Explora el catálogo
                    </h2>

                    <p className={styles.catalogoDescripcion}>
                        Encuentra juegos increíbles y guarda los que más te gusten.
                    </p>
                </div>

                <div className={styles.contadorFavoritos}>
                    <span>♥</span>

                    <div>
                        <strong>{favoritos.length}</strong>
                        <p>Favoritos</p>
                    </div>
                </div>
            </div>

            <div className={styles.catalogoFiltros}>
                <input
                    type="text"
                    placeholder="Buscar videojuego..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    aria-label="Buscar videojuego por nombre"
                />

                <select
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    aria-label="Filtrar por género"
                >
                    {generos.map((opcion) => (
                        <option key={opcion} value={opcion}>
                            {opcion === 'Todos'
                                ? 'Todos los géneros'
                                : opcion}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    className={
                        soloFavoritos
                            ? `${styles.botonFiltro} ${styles.filtroActivo}`
                            : styles.botonFiltro
                    }
                    onClick={() => setSoloFavoritos(!soloFavoritos)}
                    aria-pressed={soloFavoritos}
                >
                    ♥ {soloFavoritos ? 'Ver todos' : 'Mis favoritos'}
                </button>
            </div>

            <p className={styles.resultados}>
                Mostrando {juegosFiltrados.length} de {videojuegos.length} juegos
            </p>

            <div className={styles.juegosGrid}>
                {juegosFiltrados.map((juego) => {
                    const esFavorito = favoritos.includes(juego.id);

                    return (
                        <article
                            className={styles.juegoCard}
                            key={juego.id}
                        >
                            <div className={styles.juegoPortada}>
                                <span className={styles.juegoEmoji}>
                                    {juego.emoji}
                                </span>

                                <button
                                    type="button"
                                    className={
                                        esFavorito
                                            ? `${styles.botonFavorito} ${styles.esFavorito}`
                                            : styles.botonFavorito
                                    }
                                    onClick={() => toggleFavorito(juego.id)}
                                    aria-label={
                                        esFavorito
                                            ? `Quitar ${juego.nombre} de favoritos`
                                            : `Añadir ${juego.nombre} a favoritos`
                                    }
                                    aria-pressed={esFavorito}
                                >
                                    {esFavorito ? '♥' : '♡'}
                                </button>
                            </div>

                            <div className={styles.juegoInfo}>
                                <span className={styles.juegoGenero}>
                                    {juego.genero}
                                </span>

                                <h3>{juego.nombre}</h3>

                                <p className={styles.juegoDescripcion}>
                                    {juego.descripcion}
                                </p>

                                <div className={styles.juegoPlataforma}>
                                    <span>▣</span>
                                    <p>{juego.plataforma}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {juegosFiltrados.length === 0 && (
                <div className={styles.catalogoVacio}>
                    <span>🎮</span>
                    <h3>No encontramos juegos</h3>
                    <p>Prueba otra búsqueda o cambia los filtros.</p>
                </div>
            )}
        </section>
    );
}

export default Catalog;
