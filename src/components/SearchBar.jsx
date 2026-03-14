import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Поиск фильмов..." 
        style={{ padding: '8px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Искать</button>
    </form>
  );
};