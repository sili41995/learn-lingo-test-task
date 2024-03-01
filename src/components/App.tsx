import { FC, lazy, useEffect, useState } from 'react';
import SharedLayout from '@/components/SharedLayout';
import HomePage from '@/pages/HomePage';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from '@/hooks/redux';
import { setUser } from '@/redux/auth/authSlice';
import PrivateRoute from '@/components/PrivateRoute';
import Loader from '@/components/Loader';

const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    setIsRefreshing(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user.displayName, email: user.email }));
      }
      setIsRefreshing(false);
    });
  }, [auth, dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PagePaths.teachersPath} element={<TeachersPage />} />
        <Route
          path={PagePaths.favoritesPath}
          element={<PrivateRoute element={<FavoritesPage />} />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
