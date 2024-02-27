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
} from './NavigationBar.styled';

const NavigationBar: FC = () => {
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
        </LinksList>
      </Navigation>
      <ButtonsList>
        <ListItem>
          <LogInBtn type='button'>
            <LogIn />
            <BtnTitle>Log in</BtnTitle>
          </LogInBtn>
        </ListItem>
        <ListItem>
          <RegBtn type='button'>Registration</RegBtn>
        </ListItem>
      </ButtonsList>
    </Container>
  );
};

export default NavigationBar;
