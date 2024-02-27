import { FC, useState } from 'react';
import { IProps } from './FilterItem.types';
import { Input, InputWrap, Label, Title } from './FilterItem.styled';
import ToggleMenuBtn from '@/components/ToggleMenuBtn';

const FilterItem: FC<IProps> = ({ title, filterSize, btnDistance }) => {
  const [showFiltersList, setShowFiltersList] = useState<boolean>(false);

  const onToggleMenuBtnClick = () => {
    setShowFiltersList((prevState) => !prevState);
  };

  return (
    <Label>
      <Title>{title}</Title>
      <InputWrap>
        <Input type='text' filterSize={filterSize} disabled />
        <ToggleMenuBtn
          onClick={onToggleMenuBtnClick}
          showFiltersList={showFiltersList}
          distance={btnDistance}
        />
      </InputWrap>
    </Label>
  );
};

export default FilterItem;
