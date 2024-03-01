import { Filters } from '@/types/types';

export interface IProps {
  title: string;
  filterSize: number;
  btnDistance: number;
  settings: object;
  value: string;
  name: string;
  filters: Filters;
}

export interface IStyledProps {
  filterSize: number;
}
