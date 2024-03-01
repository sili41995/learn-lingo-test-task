import { FC, useState } from 'react';
import { IProps } from './FilterItem.types';
import { Input, InputWrap, Label, Title } from './FilterItem.styled';
import ToggleMenuBtn from '@/components/ToggleMenuBtn';
import { InputClick } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import FiltersMenu from '@/components/FiltersMenu';
import { SearchParamsKeys } from '@/constants';

const FilterItem: FC<IProps> = ({
  title,
  filterSize,
  btnDistance,
  settings,
  value,
  name,
  filters,
}) => {
  const [showFiltersList, setShowFiltersList] = useState<boolean>(false);
  const { updateSearchParams } = useSetSearchParams();
  const inputValue = value || 'All';
  const formattedInputValue =
    name === SearchParamsKeys.price ? `${inputValue} $` : inputValue;

  const onToggleMenuBtnClick = () => {
    setShowFiltersList((prevState) => !prevState);
  };

  const onMenuItemClick = (e: InputClick) => {
    const { name, value } = e.currentTarget;

    updateSearchParams({ key: name, value });
    setShowFiltersList(false);
  };

  return (
    <Label>
      <Title>{title}</Title>
      <InputWrap>
        <Input
          {...settings}
          value={formattedInputValue}
          type='text'
          filterSize={filterSize}
          disabled
        />
        <ToggleMenuBtn
          onClick={onToggleMenuBtnClick}
          showFiltersList={showFiltersList}
          distance={btnDistance}
        />
        {showFiltersList && (
          <FiltersMenu
            filters={filters}
            action={onMenuItemClick}
            currentValue={value}
            name={name}
          />
        )}
      </InputWrap>
    </Label>
  );
};

export default FilterItem;
