import { useState, useEffect } from 'react';
import { MovieCard } from '../components/MovieCard';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  }, []);

  return (
    <div>
      <h1>Хочу посмотреть</h1>
      {favorites.length === 0 ? (
        <p>Ваш список пуст. Добавьте фильмы с главной страницы!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      )}
    </div>
  );
};