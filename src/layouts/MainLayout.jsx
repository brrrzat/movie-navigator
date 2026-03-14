import { Outlet, Link } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <nav>
          <Link to="/" style={{ marginRight: '15px', fontWeight: 'bold' }}>Главная</Link>
          <Link to="/favorites" style={{ fontWeight: 'bold' }}>Мои закладки</Link>
        </nav>
      </header>
      
      <main>
        {/* Сюда будут рендериться все дочерние маршруты */}
        <Outlet />
      </main>

      <footer style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '10px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Кино-Навигатор</p>
      </footer>
    </div>
  );
};