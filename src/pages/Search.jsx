import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../api/tmdb';
import { MovieCard } from '../components/MovieCard';
import { SearchBar } from '../components/SearchBar';
import { Loader } from '../components/Loader';

export const Search = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    searchMovies(query)
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  if (loading) return <Loader />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <SearchBar />
      <h2>Результаты по запросу: "{query}"</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.length > 0 
          ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
          : <p>Ничего не найдено.</p>
        }
      </div>
    </div>
  );
};