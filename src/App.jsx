
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { MovieDetails } from './pages/MovieDetails';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'search/:query', element: <Search /> },
      { path: 'movie/:id', element: <MovieDetails /> },
      { path: 'favorites', element: <Favorites /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;