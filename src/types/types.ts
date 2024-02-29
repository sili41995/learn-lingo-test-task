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
