import { FC, useState } from 'react';
import { IProps } from './TeacherAdditionalInfo.types';
import {
  BookTrialLessonBtn,
  Container,
  Experience,
  ReadMoreBtn,
} from './TeacherAdditionalInfo.styled';
import ReviewsList from '@/components/ReviewsList';
import TeacherLevelsList from '@/components/TeacherLevelsList';
import ModalWin from '@/components/ModalWin';
import BookTrialLessonForm from '@/components/BookTrialLessonForm';

const TeacherAdditionalInfo: FC<IProps> = ({ teacher }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showBookTrialLessonForm, setShowBookTrialLessonForm] =
    useState<boolean>(false);
  const { experience, reviews, levels } = teacher;

  const onReadMoreBtnClick = () => {
    setShowMore((prevState) => !prevState);
  };

  const onBookTrialLessonBtn = () => {
    setShowBookTrialLessonForm((prevState) => !prevState);
  };

  const setModalWinState = () => {
    setShowBookTrialLessonForm(false);
  };

  return (
    <>
      <Container>
        {showMore ? (
          <>
            <Experience>{experience}</Experience>
            <ReviewsList reviews={reviews} />
          </>
        ) : (
          <ReadMoreBtn onClick={onReadMoreBtnClick}>Read more</ReadMoreBtn>
        )}
        <TeacherLevelsList levels={levels} />
        {showMore && (
          <BookTrialLessonBtn onClick={onBookTrialLessonBtn} type='button'>
            Book trial lesson
          </BookTrialLessonBtn>
        )}
      </Container>
      {showBookTrialLessonForm && (
        <ModalWin
          setModalWinState={setModalWinState}
          winSize={600}
          children={<BookTrialLessonForm teacher={teacher} />}
        />
      )}
    </>
  );
};

export default TeacherAdditionalInfo;
