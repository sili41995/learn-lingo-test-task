import { MouseEvent } from 'react';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export interface ICredentials {
  email: string;
  password: string;
}

export interface INewUser extends ICredentials {
  name: string;
}
