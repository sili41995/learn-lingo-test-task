import Filter from '@/components/Filter';
import MainSection from '@/components/MainSection';
import { FC, useEffect, useState } from 'react';
import TeachersList from '@/components/TeachersList';
import LoadMOreBtn from '@/components/LoadMOreBtn';
import teachersServiceApi from '@/service/teachersServiceApi';
import { GeneralParams } from '@/constants';
import { Teachers } from '@/types/types';
import Loader from '@/components/Loader';
import { useFilteredTeachers } from '@/hooks';

const TeachersPage: FC = () => {
  const [startAt, setStartAt] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<Teachers>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const filteredTeachers = useFilteredTeachers(teachers);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        setIsLoading(true);
        const result = await teachersServiceApi.fetchTeachers({ startAt });

        if ((result && result.length < GeneralParams.limit) || !result) {
          setIsLastPage(true);
        }

        if (Array.isArray(result)) {
          const filteredResult = result.filter((teacher) => teacher);
          setTeachers(filteredResult);
        } else if (result) {
          const teachers: Teachers = Object.values(result);
          setTeachers(teachers);

          if (teachers.length < GeneralParams.limit) {
            setIsLastPage(true);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getTeachers();
  }, [startAt]);

  const onLoadMOreBtnClick = () => {
    setStartAt((prevState) => prevState + GeneralParams.limit);
  };

  return (
    <MainSection>
      <Filter />
      <TeachersList teachers={filteredTeachers} />
      {isLoading && <Loader />}
      {!isLastPage && <LoadMOreBtn onClick={onLoadMOreBtnClick} />}
    </MainSection>
  );
};

export default TeachersPage;
