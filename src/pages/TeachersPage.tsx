import Filter from '@/components/Filter';
import MainSection from '@/components/MainSection';
import { FC, useEffect } from 'react';
import teachers from '@/constants/teachers.json';
import TeachersList from '@/components/TeachersList';
import LoadMOreBtn from '@/components/LoadMOreBtn';

const TeachersPage: FC = () => {
  useEffect(() => {
    const getTeachers = async () => {
      try {
        const result = await fetch(
          'https://learn-lingo-app-563b1-default-rtdb.firebaseio.com/teachers.json?orderBy="name"'
        );
        const teachers = await result.json();
        console.log(teachers);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };

    getTeachers();
  }, []);

  return (
    <MainSection>
      <Filter />
      <TeachersList teachers={teachers} />
      <LoadMOreBtn />
    </MainSection>
  );
};

export default TeachersPage;
