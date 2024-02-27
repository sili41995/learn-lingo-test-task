import { FC } from 'react';
import { FiltersList, ListItem } from './Filter.styled';
import FilterItem from '@/components/FilterItem';

const Filter: FC = () => {
  // const { register, handleSubmit, setValue, watch } = useForm<IFilters>();

  return (
    <FiltersList>
      <ListItem>
        <FilterItem title='Languages' filterSize={221} btnDistance={13} />
      </ListItem>
      <ListItem>
        <FilterItem
          title='Level of knowledge'
          filterSize={198}
          btnDistance={14}
        />
      </ListItem>
      <ListItem>
        <FilterItem title='Price' filterSize={124} btnDistance={18} />
      </ListItem>
    </FiltersList>
  );
};

export default Filter;
