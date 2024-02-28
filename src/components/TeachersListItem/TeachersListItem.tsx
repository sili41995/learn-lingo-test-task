import { FC, useState } from 'react';
import { IProps } from './TeachersListItem.types';
import {
  Avatar,
  Description,
  Experience,
  GeneralInfo,
  ImgWrap,
  Info,
  InfoItem,
  Languages,
  ListItem,
  MoreInfo,
  Name,
  ReadMoreBtn,
  Status,
  Title,
  TitleWrap,
} from './TeachersListItem.styled';
import ReviewsList from '@/components/ReviewsList';

const TeachersListItem: FC<IProps> = ({ teacher }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const {
    avatar_url,
    name,
    languages,
    lesson_info: lessonInfo,
    conditions,
    experience,
    reviews,
  } = teacher;
  const teacherLanguages = languages.join(', ');
  const teacherConditions = conditions.join(' ');

  const onReadMoreBtnClick = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <ListItem>
      <ImgWrap>
        <Avatar src={avatar_url} alt={name} />
        <Status />
      </ImgWrap>
      <div>
        <TitleWrap>
          <Title>Languages</Title>
          <Name>{name}</Name>
        </TitleWrap>
        <GeneralInfo>
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
        </GeneralInfo>
        <MoreInfo>
          {showMore ? (
            <>
              <Experience>{experience}</Experience>
              <ReviewsList reviews={reviews} />
            </>
          ) : (
            <ReadMoreBtn onClick={onReadMoreBtnClick}>Read more</ReadMoreBtn>
          )}
        </MoreInfo>
      </div>
    </ListItem>
  );
};

export default TeachersListItem;
