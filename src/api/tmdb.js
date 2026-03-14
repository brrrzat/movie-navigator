const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=ru-RU`);
  if (!res.ok) throw new Error('Ошибка при загрузке трендов');
  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ru-RU`);
  if (!res.ok) throw new Error('Ошибка поиска');
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ru-RU&append_to_response=credits`);
  if (!res.ok) throw new Error('Ошибка загрузки деталей фильма');
  return res.json();
};