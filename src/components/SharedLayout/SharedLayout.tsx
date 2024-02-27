import { FC, Suspense } from 'react';
import { Header, Main } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Container from '@/components/Container';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <NavigationBar />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
