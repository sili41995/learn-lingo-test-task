import { FC, Suspense } from 'react';
import { Header, Main, Container, Section } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import { PagePaths } from '@/constants';

const SharedLayout: FC = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === PagePaths.homePath;

  return (
    <>
      <Header>
        <Container>
          <NavigationBar />
        </Container>
      </Header>
      <Main>
        <Section isHomePage={isHomePage}>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};

export default SharedLayout;
