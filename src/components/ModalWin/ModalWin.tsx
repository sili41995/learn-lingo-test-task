import { FC, MouseEvent, useEffect } from 'react';
import { IProps } from './ModalWin.types';
import { Backdrop, CloseBtn, Container } from './ModalWin.styled';
import { createPortal } from 'react-dom';
import { AriaLabels } from '@/constants';
import { CgClose } from 'react-icons/cg';

const ModalWin: FC<IProps> = ({
  setModalWinState,
  children,
  winSize,
  maxSize,
}) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState]);

  const hideModalWin = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

  return (
    modalRoot &&
    createPortal(
      <Backdrop onClick={hideModalWin} maxSize={maxSize}>
        <Container winSize={winSize}>
          <CloseBtn aria-label={AriaLabels.closeBtn} onClick={setModalWinState}>
            <CgClose size={32} />
          </CloseBtn>
          {children}
        </Container>
      </Backdrop>,
      modalRoot
    )
  );
};

export default ModalWin;
