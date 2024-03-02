import Filter from '@/components/Filter';
import MainSection from '@/components/MainSection';
import { FC, useEffect, useState } from 'react';
import TeachersList from '@/components/TeachersList';
import LoadMOreBtn from '@/components/LoadMOreBtn';
import teachersServiceApi from '@/service/teachersServiceApi';
import { GeneralParams, Messages, SearchParamsKeys } from '@/constants';
import { Teachers } from '@/types/types';
import Loader from '@/components/Loader';
import { useFilteredTeachers, useSetSearchParams } from '@/hooks';
import { toasts } from '@/utils';
import DefaultMessage from '@/components/DefaultMessage';

const TeachersPage: FC = () => {
  const [startAt, setStartAt] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<Teachers>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updateSearchParams } = useSetSearchParams();
  const filteredTeachers = useFilteredTeachers(teachers);
  const shouldShowEmptyFilteredListErr = !filteredTeachers.length;

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

        toasts.successToast(Messages.loadedSuccess);
        updateSearchParams({ key: SearchParamsKeys.language, value: '' });
        updateSearchParams({ key: SearchParamsKeys.level, value: '' });
        updateSearchParams({ key: SearchParamsKeys.price, value: '' });
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getTeachers();
  }, [startAt, updateSearchParams]);

  const onLoadMOreBtnClick = () => {
    setStartAt((prevState) => prevState + GeneralParams.limit);
  };

  return (
    <MainSection>
      <Filter />
      {shouldShowEmptyFilteredListErr ? (
        <DefaultMessage message={Messages.emptyFilteredList} />
      ) : (
        <TeachersList teachers={filteredTeachers} />
      )}
      {isLoading && <Loader />}
      {!isLastPage && <LoadMOreBtn onClick={onLoadMOreBtnClick} />}
    </MainSection>
  );
};

export default TeachersPage;
