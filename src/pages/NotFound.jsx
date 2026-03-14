import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>404</h1>
    <p>Страница не найдена</p>
    <Link to="/">Вернуться на главную</Link>
  </div>
);