import { FC } from 'react';
import { IProps } from './TeacherCardHeader.types';
import {
  Container,
  FavBtn,
  ListItem,
  Option,
  OptionAccent,
  OptionsList,
} from './TeacherCardHeader.styled';
import {
  PiBookOpenBold,
  PiHeartBold,
  PiHeartFill,
  PiStarFill,
} from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { toasts } from '@/utils';
import { Messages } from '@/constants';
import { toggleFavList } from '@/redux/teachers/teachersSlice';
import { selectFavList } from '@/redux/teachers/selectors';

const TeacherCardHeader: FC<IProps> = ({ teacher }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const favList = useAppSelector(selectFavList);
  const dispatch = useAppDispatch();
  const {
    id,
    lessons_done: lessonsDone,
    rating,
    price_per_hour: pricePerHour,
  } = teacher;
  const favTeachersIds = favList.map(({ id }) => id);
  const isFav = favTeachersIds.includes(id);
  const favBtnIcon = isFav ? (
    <PiHeartFill size={26} />
  ) : (
    <PiHeartBold size={26} />
  );

  const onFavBtnClick = () => {
    if (isLoggedIn) {
      dispatch(toggleFavList(teacher));
    } else {
      toasts.warnToast(Messages.authErr);
    }
  };

  return (
    <Container>
      <PiBookOpenBold size={16} />
      <OptionsList>
        <ListItem>
          <Option>Lessons online</Option>
        </ListItem>
        <ListItem>
          <Option>Lessons done: {lessonsDone}</Option>
        </ListItem>
        <ListItem>
          <PiStarFill size={16} />
          <Option>Rating: {rating}</Option>
        </ListItem>
        <ListItem>
          <Option>
            Price / 1 hour: <OptionAccent>{pricePerHour}$</OptionAccent>
          </Option>
        </ListItem>
      </OptionsList>
      <FavBtn isFav={isFav} onClick={onFavBtnClick}>
        {favBtnIcon}
      </FavBtn>
    </Container>
  );
};

export default TeacherCardHeader;
