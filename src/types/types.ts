import { MouseEvent } from 'react';

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

export interface ITeacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: IReview[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

export type Teachers = ITeacher[];
