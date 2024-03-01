import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { IProps } from './PrivateRoute.types';
import { PagePaths } from '@/constants';
import { FC } from 'react';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? (
    <Navigate to={PagePaths.homePath} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
