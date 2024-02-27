import { FC } from 'react';
import {
  Accent,
  Container,
  Description,
  GirlImg,
  ImgWrap,
  Info,
  InfoWrap,
  ListItem,
  MacImg,
  Quantity,
  StatisticsList,
  Title,
} from './GeneralInfo.styled';
import girlImg from '@/images/girl.png';
import macImg from '@/images/mac.png';
import { Link } from 'react-router-dom';
import { PagePaths } from '@/constants';

const GeneralInfo: FC = () => {
  return (
    <>
      <Container>
        <InfoWrap>
          <Title>
            Unlock your potential with the best <Accent>language</Accent> tutors
          </Title>
          <Info>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Info>
          <Link to={PagePaths.teachersPath}>Get started</Link>
        </InfoWrap>
        <ImgWrap>
          <GirlImg src={girlImg} alt='girl' />
          <MacImg src={macImg} alt='mac' />
        </ImgWrap>
      </Container>
      <StatisticsList>
        <ListItem>
          <Quantity>32,000 +</Quantity>
          <Description>Experienced tutors</Description>
        </ListItem>
        <ListItem>
          <Quantity>300,000 +</Quantity>
          <Description>5-star tutor reviews</Description>
        </ListItem>
        <ListItem>
          <Quantity>120 +</Quantity>
          <Description>Subjects taught</Description>
        </ListItem>
        <ListItem>
          <Quantity>200 +</Quantity>
          <Description>Tutor nationalities</Description>
        </ListItem>
      </StatisticsList>
    </>
  );
};

export default GeneralInfo;
