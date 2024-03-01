import { FC } from 'react';
import { IProps } from './FiltersMenu.types';
import { Input, Item, Label, List, Title } from './FiltersMenu.styled';

const FiltersMenu: FC<IProps> = ({ filters, action, currentValue, name }) => (
  <List>
    <Item>
      <Label>
        <Title isActive={!currentValue}>All</Title>
        <Input type='radio' value='' name={name} onClick={action} />
      </Label>
    </Item>
    {filters &&
      filters.map((item, index) => {
        const isActive = currentValue.toLowerCase() === item.toLowerCase();

        return (
          <Item key={index}>
            <Label>
              <Title isActive={isActive}>{item}</Title>
              <Input type='radio' value={item} name={name} onClick={action} />
            </Label>
          </Item>
        );
      })}
  </List>
);

export default FiltersMenu;
