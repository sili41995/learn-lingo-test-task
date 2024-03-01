import { MouseEvent } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export interface ICredentials {
  email: string;
  password: string;
}

export interface INewUser extends ICredentials {
  name: string;
}

export interface IReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type Reviews = IReview[];

export type Levels = string[];

export interface ITeacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: Levels;
  rating: number;
  reviews: Reviews;
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

export type Teachers = ITeacher[];

export interface ITrialLessonData {
  reason: string;
  name: string;
  email: string;
  phone: string;
}

export interface IUserState {
  name: string | null;
  email: string | null;
}

export interface IAuthState {
  user: IUserState;
  isLoggedIn: boolean;
}

export interface ITeachersState {
  items: ITeacher[];
  favorites: ITeacher[];
}

export interface IState {
  teachers: ITeachersState;
  auth: IAuthState;
}

export interface IFetchTeachersProps {
  startAt: number;
}

export type Filters = string[];

export type InputClick = MouseEvent<HTMLInputElement>;

export interface IFilters {
  level: string;
  price: string;
  language: string;
}

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}
