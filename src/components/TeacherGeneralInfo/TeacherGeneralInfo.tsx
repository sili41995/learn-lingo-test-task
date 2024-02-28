import { FC } from 'react';
import { IProps } from './TeacherGeneralInfo.types';
import {
  Container,
  Description,
  Info,
  InfoItem,
  Languages,
} from './TeacherGeneralInfo.styled';

const TeacherGeneralInfo: FC<IProps> = ({ teacher }) => {
  const { languages, conditions, lesson_info: lessonInfo } = teacher;
  const teacherLanguages = languages.join(', ');
  const teacherConditions = conditions.join(' ');

  return (
    <Container>
      <InfoItem>
        <Info>
          Speaks: <Languages>{teacherLanguages}</Languages>
        </Info>
      </InfoItem>
      <InfoItem>
        <Info>
          Lesson Info: <Description>{lessonInfo}</Description>
        </Info>
      </InfoItem>
      <InfoItem>
        <Info>
          Conditions: <Description>{teacherConditions}</Description>
        </Info>
      </InfoItem>
    </Container>
  );
};

export default TeacherGeneralInfo;
