import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IProps } from './ToggleMenuBtn.types';
import { Button } from './ToggleMenuBtn.styled';

const ToggleMenuBtn: FC<IProps> = ({ onClick, showFiltersList, distance }) => {
  return (
    <Button
      type='button'
      onClick={onClick}
      showFiltersList={showFiltersList}
      distance={distance}
    >
      <FaChevronDown size={20} />
    </Button>
  );
};

export default ToggleMenuBtn;
