// Paso 1: Importar axios
import axios from 'axios';


// Paso 2: Configurar la URL base y parámetros
const API_KEY = 'tu_api_key_aqui';
const BASE_URL = 'https://api.themoviedb.org/3';


// Paso 3: Crear instancia de axios con configuración
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: "62a3a831bc57922f157fd0fe2bb2bf76",
    language: 'es-ES'
  }
});


// Paso 4: Exportar funciones para diferentes endpoints
export const movieAPI = {
  getPopularMovies: () => api.get('/movie/popular'),
  getPopularSeries: () => api.get('/tv/popular'),
  searchMulti: (query) => api.get('/search/multi', { params: { query } })
};
