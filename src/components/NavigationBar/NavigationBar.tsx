import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import LogIn from '@/icons/logIn.svg?react';
import {
  Container,
  ButtonsList,
  LinksList,
  ListItem,
  LogInBtn,
  Navigation,
  RegBtn,
  Title,
  BtnTitle,
  LogOutBtn,
} from './NavigationBar.styled';
import { IProps } from './NavigationBar.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { getAuth, signOut } from 'firebase/auth';
import { toasts } from '@/utils';
import { logOut } from '@/redux/auth/authSlice';

const NavigationBar: FC<IProps> = ({ onLogInBtnClick, onRegisterBtnClick }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const onLogOutBtnClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
      })
      .catch((error: Error) => {
        toasts.errorToast(error.message);
      });
  };

  return (
    <Container>
      <Navigation>
        <Link to={PagePaths.homePath} className='logo'>
          <Logo />
          <Title>LearnLingo</Title>
        </Link>
        <LinksList>
          <ListItem>
            <NavLink to={PagePaths.homePath}>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={PagePaths.teachersPath}>Teachers</NavLink>
          </ListItem>
          {isLoggedIn && (
            <ListItem>
              <NavLink to={PagePaths.favoritesPath}>Favorites</NavLink>
            </ListItem>
          )}
        </LinksList>
      </Navigation>
      {isLoggedIn ? (
        <LogOutBtn type='button' onClick={onLogOutBtnClick}>
          Log Out
        </LogOutBtn>
      ) : (
        <ButtonsList>
          <ListItem>
            <LogInBtn type='button' onClick={onLogInBtnClick}>
              <LogIn />
              <BtnTitle>Log in</BtnTitle>
            </LogInBtn>
          </ListItem>
          <ListItem>
            <RegBtn type='button' onClick={onRegisterBtnClick}>
              Registration
            </RegBtn>
          </ListItem>
        </ButtonsList>
      )}
    </Container>
  );
};

export default NavigationBar;
