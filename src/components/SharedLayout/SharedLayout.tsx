import { FC, Suspense, useState } from 'react';
import { Header, Main } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Container from '@/components/Container';
import ModalWin from '@/components/ModalWin';
import LogInForm from '@/components/LogInForm';
import RegisterForm from '@/components/RegisterForm';

const SharedLayout: FC = () => {
  const [showLogInForm, setShowLogInForm] = useState<boolean>(false);
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);

  const setModalWinState = () => {
    showLogInForm && setShowLogInForm(false);
    showRegisterForm && setShowRegisterForm(false);
  };

  const onLogInBtnClick = () => {
    setShowLogInForm(true);
  };

  const onRegisterBtnClick = () => {
    setShowRegisterForm(true);
  };

  const onSuccessfulRegister = () => {
    setShowRegisterForm(false);
    setShowLogInForm(true);
  };

  const onSuccessfulLogIn = () => {
    setShowLogInForm(false);
  };

  return (
    <>
      <Header>
        <Container>
          <NavigationBar
            onLogInBtnClick={onLogInBtnClick}
            onRegisterBtnClick={onRegisterBtnClick}
          />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      {showLogInForm && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={<LogInForm onSuccessfulLogIn={onSuccessfulLogIn} />}
          winSize={566}
          maxSize={506}
        />
      )}
      {showRegisterForm && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={
            <RegisterForm onSuccessfulRegister={onSuccessfulRegister} />
          }
          winSize={566}
          maxSize={600}
        />
      )}
    </>
  );
};

export default SharedLayout;
