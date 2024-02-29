import { ReactNode } from 'react';

export interface IProps {
  winSize: number;
  setModalWinState: () => void;
  children: ReactNode;
  maxSize: number;
}

export interface IStyledProps {
  winSize: number;
}

export interface IWinStyledProps {
  maxSize: number;
}
