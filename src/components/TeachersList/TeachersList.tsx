import { FC } from 'react';
import { IProps } from './TeachersList.types';
import TeachersListItem from '@/components/TeachersListItem';
import { List } from './TeachersList.styled';

const TeachersList: FC<IProps> = ({ teachers }) => {
  return (
    <List>
      {teachers.map((teacher) => (
        <TeachersListItem key={teacher.id} teacher={teacher} />
      ))}
    </List>
  );
};

export default TeachersList;
