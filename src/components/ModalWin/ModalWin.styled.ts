import styled from '@emotion/styled';
import { IStyledProps, IWinStyledProps } from './ModalWin.types';

export const Backdrop = styled.div<IWinStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backdropColor};
  overflow-y: scroll;

  @media screen and (max-height: ${({ maxSize }) => maxSize}px) {
    align-items: flex-start;
  }
`;

export const Container = styled.div<IStyledProps>`
  max-width: ${({ winSize }) => winSize}px;
  position: relative;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: ${({ theme }) => theme.spacing(16)};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  border: 0;
  background-color: transparent;

  &:is(:hover, :focus) svg {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  & svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryFontColor};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
