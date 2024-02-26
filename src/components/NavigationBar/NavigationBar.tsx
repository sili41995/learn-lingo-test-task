import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import {
  ButtonsList,
  LinksList,
  ListItem,
  LogInBtn,
  Navigation,
  RegBtn,
  Title,
} from './NavigationBar.styled';

const NavigationBar: FC = () => {
  return (
    <>
      <Navigation>
        <Link to={PagePaths.homePath} className='logo'>
          <Logo />
          <Title>LearnLingo</Title>
        </Link>
        <LinksList>
          <ListItem>
            <Link to={PagePaths.homePath}>Home</Link>
          </ListItem>
          <ListItem>
            <Link to={PagePaths.teachersPath}>Teachers</Link>
          </ListItem>
        </LinksList>
      </Navigation>
      <ButtonsList>
        <ListItem>
          <LogInBtn type='button'>Log in</LogInBtn>
          <RegBtn type='button'>Registration</RegBtn>
        </ListItem>
      </ButtonsList>
    </>
  );
};

export default NavigationBar;
