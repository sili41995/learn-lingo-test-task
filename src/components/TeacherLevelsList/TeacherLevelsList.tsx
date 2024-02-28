import { FC } from 'react';
import { IProps } from './TeacherLevelsList.types';
import { Level, List, ListItem } from './TeacherLevelsList.styled';

const TeacherLevelsList: FC<IProps> = ({ levels }) => {
  return (
    <List>
      {levels.map((level) => (
        <ListItem key={level}>
          <Level>#{level}</Level>
        </ListItem>
      ))}
    </List>
  );
};

export default TeacherLevelsList;
