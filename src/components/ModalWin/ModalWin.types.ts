import { ReactNode } from 'react';

export interface IProps {
  winSize: number;
  setModalWinState: () => void;
  children: ReactNode;
}

export interface IStyledProps {
  winSize: number;
}
