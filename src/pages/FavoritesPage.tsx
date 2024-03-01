import Filter from '@/components/Filter';
import MainSection from '@/components/MainSection';
import TeachersList from '@/components/TeachersList';
import { useAppSelector } from '@/hooks/redux';
import { selectFavList } from '@/redux/teachers/selectors';
import { FC } from 'react';

const FavoritesPage: FC = () => {
  const teachers = useAppSelector(selectFavList);

  return (
    <MainSection>
      <Filter />
      <TeachersList teachers={teachers} />
    </MainSection>
  );
};

export default FavoritesPage;
