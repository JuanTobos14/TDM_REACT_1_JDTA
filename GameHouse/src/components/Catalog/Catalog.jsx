
import { useState } from 'react';
import styles from './Catalog.module.css';

const videojuegos = [
    {
        id: 1,
        nombre: 'Hollow Knight: Silksong',
        genero: 'Metroidvania / Acción',
        plataforma: 'PC, PlayStation, Xbox, Nintendo Switch',
        descripcion:
            'Acompaña a Hornet en una aventura desafiante por un reino misterioso lleno de enemigos, secretos y poderosos jefes.',
        imagen:
            'https://imgs.search.brave.com/FZxGUMSjaLa9gnRPfICJB5f3Gn0uvM1lPWTHe3bbRVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMueGJveHNlcnZp/Y2VzLmNvbS9hc3Nl/dHMvYzMvYmEvYzNi/YWRmZWEtNjU1Zi00/ZGRiLWEwMzctNzA0/ZTVjZjI3OTMwLmpw/Zz9uPTQ4ODEyM19H/TFAtUGFnZS1IZXJv/LTEwODRfMTkyMHgx/MDgwLmpwZw'
    },
    {
        id: 2,
        nombre: 'Minecraft',
        genero: 'Sandbox',
        plataforma: 'PC, PlayStation, Xbox, Switch',
        descripcion:
            'Construye, explora y crea tu propio mundo con bloques.',
        imagen:
            'https://imgs.search.brave.com/t13iy1GCi57_eZ_6BaaMQsdtHB7BVtcwuE6HcB531gQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/NjA4LjEzNTEwNzk4/ODg1NzM1MjE5LmNm/NTVhZWNhLWU2OTAt/NDFlMC1hODhiLTQx/YjBlNTE3YTNiZS5j/OTRlMWJmYS0xYjY4/LTRjZjUtOTk1NC1m/OTY3MTY4NDgwYjQ_/cT05MCZ3PTQ4MCZo/PTI3MA'
    },
    {
        id: 3,
        nombre: 'God of War Ragnarök',
        genero: 'Acción',
        plataforma: 'PlayStation, PC',
        descripcion:
            'Acompaña a Kratos y Atreus en una aventura mitológica.',
        imagen:
            'https://imgs.search.brave.com/_kv93zu30eWLOEgAbDks7RQbmDsl7b9eL0vtpIodclw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC81L2Qv/Mi8xMzQzMjktMjg4/MHgxODAwLWRlc2t0/b3AtaGQtZ29kLW9m/LXdhci1yYWduYXJv/ay13YWxscGFwZXIt/aW1hZ2UuanBn'
    },
    {
        id: 4,
        nombre: 'Forza Horizon 5',
        genero: 'Carreras',
        plataforma: 'PC, Xbox, PlayStation',
        descripcion:
            'Compite en emocionantes carreras por los paisajes de México.',
        imagen:
            'https://imgs.search.brave.com/xIbL99RHD-oFMnViihtT6hi9yf6Ivavy4VWYp9IrQyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGNnYW1lc24uY29t/L3dwLWNvbnRlbnQv/c2l0ZXMvcGNnYW1l/c24vMjAyMS8wNi9m/b3J6YS1ob3Jpem9u/LTUtc3lzdGVtLXJl/cXVpcmVtZW50cy0x/LTMzM3gxODcuanBn'
    },
    {
        id: 5,
        nombre: 'Plantas vs. Zombies',
        genero: 'Estrategia / Tower Defense',
        plataforma: 'PC, PlayStation, Xbox, Móvil',
        descripcion:
            'Defiende tu jardín de las hordas de zombis con plantas increíbles y mucha estrategia.',
        imagen:
            'https://imgs.search.brave.com/7nSDJXCvrBKzkfdAB7ky7Z_xF12YQFdOmmBIDEQAWjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0NU/V2d4dlpnWU1tcldD/dFVxQ1p5Z1YtNDUw/LTgwLmpwZw'
    },
    {
        id: 6,
        nombre: 'Peppa Pig: Un mundo de aventuras',
        genero: 'Aventura / Infantil',
        plataforma: 'PC, PlayStation, Xbox, Nintendo Switch',
        descripcion:
            'Explora el mundo con Peppa Pig, visita lugares increíbles y disfruta de divertidas aventuras para toda la familia.',
        imagen:
            'https://imgs.search.brave.com/FUBSiDlaYKJ0hxFaBFNebUI1klWWz153SGMKggoMVp4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/MTkzNTUuMTQ1MjMw/NTY4MzA3NTMxMzUu/MGY4MjE2NTktYjRi/Ny00OWU2LWFlM2Et/ZGNjMjMxOTQ1NGQ2/LmQ1OGI2YWY0LTA3/ZmYtNDFiZC1hNjcw/LWVkYTI2Mjk0NTI4/YT9xPTkwJnc9NDgw/Jmg9Mjcw'
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
        ...new Set(videojuegos.map((juego) => juego.genero))
    ];

    const juegosFiltrados = videojuegos.filter((juego) => {
        const coincideNombre = juego.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase().trim());

        const coincideGenero =
            genero === 'Todos' || juego.genero === genero;

        const coincideFavoritos =
            !soloFavoritos || favoritos.includes(juego.id);

        return (
            coincideNombre &&
            coincideGenero &&
            coincideFavoritos
        );
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
                    <span aria-hidden="true">♥</span>

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
                    onClick={() =>
                        setSoloFavoritos((actual) => !actual)
                    }
                    aria-pressed={soloFavoritos}
                >
                    ♥ {soloFavoritos ? 'Ver todos' : 'Mis favoritos'}
                </button>
            </div>

            <p className={styles.resultados} aria-live="polite">
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
                                <img
                                    className={styles.juegoImagen}
                                    src={juego.imagen}
                                    alt={`Portada de ${juego.nombre}`}
                                    loading="lazy"
                                />

                                <button
                                    type="button"
                                    className={
                                        esFavorito
                                            ? `${styles.botonFavorito} ${styles.esFavorito}`
                                            : styles.botonFavorito
                                    }
                                    onClick={() =>
                                        toggleFavorito(juego.id)
                                    }
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
                                    <span aria-hidden="true">▣</span>
                                    <p>{juego.plataforma}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {juegosFiltrados.length === 0 && (
                <div className={styles.catalogoVacio}>
                    <span aria-hidden="true">🎮</span>
                    <h3>No encontramos juegos</h3>
                    <p>
                        Prueba otra búsqueda o cambia los filtros.
                    </p>
                </div>
            )}
        </section>
    );
}

export default Catalog;
