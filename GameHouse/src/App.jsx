
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'

function App() {
  // Tema oscuro por defecto
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  })

  // Favoritos guardados en localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch (error) {
      console.error('Error al cargar favoritos:', error)
      return []
    }
  })

  // Aplicar y guardar el tema
  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode)

    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Guardar favoritos cuando cambien
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // Alternar tema
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  // Agregar o quitar favoritos
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(
        (favorite) => favorite.id === product.id
      )

      if (isFavorite) {
        return prevFavorites.filter(
          (favorite) => favorite.id !== product.id
        )
      }

      return [...prevFavorites, product]
    })
  }

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Hero />

      <Catalog
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <Footer />
    </>
  )
}

export default App
