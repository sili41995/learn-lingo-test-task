import { FC } from 'react';
import {
  Accent,
  GirlImg,
  ImgWrap,
  InfoWrap,
  MacImg,
} from './GeneralInfo.styled';
import girlImg from '@/images/girl.png';
import macImg from '@/images/mac.png';

const GeneralInfo: FC = () => {
  return (
    <>
      <InfoWrap>
        <Title>
          Unlock your potential with the best <Accent>language</Accent> tutors
        </Title>
        <Info>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Info>
      </InfoWrap>
      <ImgWrap>
        <GirlImg src={girlImg} alt='girl' />
        <MacImg src={macImg} alt='mac' />
      </ImgWrap>
    </>
  );
};

export default GeneralInfo;
