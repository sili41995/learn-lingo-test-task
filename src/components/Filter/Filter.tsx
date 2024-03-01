import { FC } from 'react';
import { FiltersList, ListItem } from './Filter.styled';
import FilterItem from '@/components/FilterItem';
import { SearchParamsKeys, languages, levels, prices } from '@/constants';
import { IFilters } from '@/types/types';
import { useForm } from 'react-hook-form';
import { useSetSearchParams } from '@/hooks';

const Filter: FC = () => {
  const { searchParams } = useSetSearchParams();
  const { register } = useForm<IFilters>();
  const levelValue = searchParams.get(SearchParamsKeys.level) ?? '';
  const languageValue = searchParams.get(SearchParamsKeys.language) ?? '';
  const priceValue = searchParams.get(SearchParamsKeys.price) ?? '';

  return (
    <FiltersList>
      <ListItem>
        <FilterItem
          value={languageValue}
          settings={{ ...register(SearchParamsKeys.language) }}
          title='Languages'
          filterSize={221}
          btnDistance={13}
          filters={languages}
          name={SearchParamsKeys.language}
        />
      </ListItem>
      <ListItem>
        <FilterItem
          settings={{ ...register(SearchParamsKeys.level) }}
          value={levelValue}
          title='Level of knowledge'
          filterSize={198}
          btnDistance={14}
          filters={levels}
          name={SearchParamsKeys.level}
        />
      </ListItem>
      <ListItem>
        <FilterItem
          settings={{ ...register(SearchParamsKeys.price) }}
          title='Price'
          filterSize={124}
          btnDistance={18}
          value={priceValue}
          filters={prices}
          name={SearchParamsKeys.price}
        />
      </ListItem>
    </FiltersList>
  );
};

export default Filter;
