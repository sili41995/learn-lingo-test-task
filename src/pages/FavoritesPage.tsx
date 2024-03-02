import DefaultMessage from '@/components/DefaultMessage';
import Filter from '@/components/Filter';
import MainSection from '@/components/MainSection';
import TeachersList from '@/components/TeachersList';
import { Messages } from '@/constants';
import { useFilteredTeachers } from '@/hooks';
import { useAppSelector } from '@/hooks/redux';
import { selectFavList } from '@/redux/teachers/selectors';
import { FC } from 'react';

const FavoritesPage: FC = () => {
  const teachers = useAppSelector(selectFavList);
  const filteredTeachers = useFilteredTeachers(teachers);
  const shouldShowFavList = Boolean(teachers.length);
  const shouldShowEmptyFilteredListErr =
    shouldShowFavList && !filteredTeachers.length;

  return (
    <MainSection>
      <Filter />
      {shouldShowFavList && <TeachersList teachers={filteredTeachers} />}
      {!shouldShowFavList && <DefaultMessage message={Messages.emptyFavList} />}
      {shouldShowEmptyFilteredListErr && (
        <DefaultMessage message={Messages.emptyFilteredList} />
      )}
    </MainSection>
  );
};

export default FavoritesPage;
