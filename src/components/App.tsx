import { FC, lazy } from 'react';
import SharedLayout from '@/components/SharedLayout';
import HomePage from '@/pages/HomePage';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';

const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PagePaths.teachersPath} element={<TeachersPage />} />
        <Route path={PagePaths.favoritesPath} element={<FavoritesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
