import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = (e) => {
    e.preventDefault(); // Чтобы клик по кнопке не перекидывал на страницу фильма
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== movie.id);
    } else {
      favorites.push({ id: movie.id, title: movie.title, poster_path: movie.poster_path });
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', margin: '10px' }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200x300'} 
          alt={movie.title} 
          style={{ width: '100%' }} 
        />
        <h3>{movie.title}</h3>
      </Link>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Убрать из закладок' : 'В закладки'}
      </button>
    </div>
  );
};