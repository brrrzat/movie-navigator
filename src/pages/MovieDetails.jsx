import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import { Loader } from '../components/Loader';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!movie) return null;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <img 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/300x450'} 
        alt={movie.title} 
      />
      <div>
        <h1>{movie.title}</h1>
        <p><strong>Рейтинг:</strong> {movie.vote_average}</p>
        <p><strong>Описание:</strong> {movie.overview}</p>
        <h3>Актеры:</h3>
        <ul>
          {movie.credits?.cast?.slice(0, 5).map(actor => (
            <li key={actor.id}>{actor.name} как {actor.character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};