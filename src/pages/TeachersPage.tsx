import Filter from '@/components/Filter';
import MainSection from '@/components/MainSection';
import { FC } from 'react';
import teachers from '@/constants/teachers.json';
import TeachersList from '@/components/TeachersList';

const TeachersPage: FC = () => {
  return (
    <MainSection>
      <Filter />
      <TeachersList teachers={teachers} />
    </MainSection>
  );
};

export default TeachersPage;
