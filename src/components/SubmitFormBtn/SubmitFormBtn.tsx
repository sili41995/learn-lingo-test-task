import { FC } from 'react';
import { Button } from './SubmitFormBtn.styled';
import { IProps } from './SubmitFormBtn.types';

const SubmitFormBtn: FC<IProps> = ({ title }) => (
  <Button type='submit'>{title}</Button>
);

export default SubmitFormBtn;
