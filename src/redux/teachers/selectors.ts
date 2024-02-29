import { IState } from '@/types/types';

export const selectTeachers = (state: IState) => state.teachers.items;

export const selectFavList = (state: IState) => state.teachers.favorites;
