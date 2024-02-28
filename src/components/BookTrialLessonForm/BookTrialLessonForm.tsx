import { FC } from 'react';
import { IProps } from './BookTrialLessonForm.types';
import {
  Avatar,
  Description,
  InfoWrap,
  Name,
  Subtitle,
  InfoTitle,
  TeacherInfo,
  Title,
} from './BookTrialLessonForm.styled';

const BookTrialLessonForm: FC<IProps> = ({ teacher }) => {
  const { avatar_url: avatarUrl, name, surname } = teacher;
  const fullName = `${name} ${surname}`;

  return (
    <>
      <Title>Book trial lesson</Title>
      <Description>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Description>
      <TeacherInfo>
        <Avatar src={avatarUrl} alt={fullName} />
        <InfoWrap>
          <InfoTitle>Your teacher</InfoTitle>
          <Name>{fullName}</Name>
        </InfoWrap>
      </TeacherInfo>
      <Subtitle>What is your main reason for learning English?</Subtitle>
      <label>
        <input type='radio' name='reasons' />
        <span>Career and business</span>
      </label>
    </>
  );
};

export default BookTrialLessonForm;
