import { FC } from 'react';
import { Button } from './LoadMOreBtn.styled';
import { IProps } from './LoadMOreBtn.types';

const LoadMOreBtn: FC<IProps> = ({ onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      Load more
    </Button>
  );
};

export default LoadMOreBtn;
