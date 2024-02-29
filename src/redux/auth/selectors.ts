import { IState } from '@/types/types';

export const selectUser = (state: IState) => state.auth.user;

export const selectIsLoggedIn = (state: IState) => state.auth.isLoggedIn;
