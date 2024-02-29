import { FC } from 'react';
import { IProps } from './TeachersListItem.types';
import {
  Avatar,
  HeaderContainer,
  ImgWrap,
  InfoWrap,
  ListItem,
  Name,
  Status,
  Title,
  TitleWrap,
} from './TeachersListItem.styled';
import TeacherAdditionalInfo from '../TeacherAdditionalInfo';
import TeacherGeneralInfo from '@/components/TeacherGeneralInfo';
import TeacherCardHeader from '@/components/TeacherCardHeader';

const TeachersListItem: FC<IProps> = ({ teacher }) => {
  const { avatar_url, name, surname } = teacher;
  const fullName = `${name} ${surname}`;

  return (
    <ListItem>
      <ImgWrap>
        <Avatar src={avatar_url} alt={fullName} />
        <Status />
      </ImgWrap>
      <InfoWrap>
        <HeaderContainer>
          <TitleWrap>
            <Title>Languages</Title>
            <Name>{fullName}</Name>
          </TitleWrap>
          <TeacherCardHeader teacher={teacher} />
        </HeaderContainer>
        <TeacherGeneralInfo teacher={teacher} />
        <TeacherAdditionalInfo teacher={teacher} />
      </InfoWrap>
    </ListItem>
  );
};

export default TeachersListItem;
