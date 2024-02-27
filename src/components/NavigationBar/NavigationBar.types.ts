import { BtnClickEvent } from '@/types/types';

export interface IProps {
  onLogInBtnClick: (e: BtnClickEvent) => void;
  onRegisterBtnClick: (e: BtnClickEvent) => void;
}
