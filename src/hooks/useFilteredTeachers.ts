import { SearchParamsKeys } from '@/constants';
import { Teachers } from '@/types/types';
import { useMemo } from 'react';
import { useSetSearchParams } from '.';

const useFilteredTeachers = (teachers: Teachers): Teachers => {
  const { searchParams } = useSetSearchParams();
  const language = searchParams.get(SearchParamsKeys.language);
  const level = searchParams.get(SearchParamsKeys.level);
  const price = searchParams.get(SearchParamsKeys.price);

  const filteredTeachersByLanguage = useMemo(
    () =>
      language
        ? teachers.filter((teacher) => teacher.languages.includes(language))
        : teachers,
    [language, teachers]
  );

  const filteredTeachersByLevel = useMemo(
    () =>
      level
        ? filteredTeachersByLanguage.filter((teacher) =>
            teacher.levels.includes(level)
          )
        : filteredTeachersByLanguage,
    [level, filteredTeachersByLanguage]
  );

  const filteredTeachers = useMemo(
    () =>
      price
        ? filteredTeachersByLevel.filter(
            (teacher) => teacher.price_per_hour <= Number(price)
          )
        : filteredTeachersByLevel,
    [price, filteredTeachersByLevel]
  );

  return filteredTeachers;
};

export default useFilteredTeachers;
