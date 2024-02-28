import { FC } from 'react';
import { IProps } from './ReviewsList.types';
import {
  Avatar,
  Comment,
  Container,
  List,
  ListItem,
  Name,
  Rating,
  RatingWrap,
  ReviewerInfo,
} from './ReviewsList.styled';
import { FaStar } from 'react-icons/fa';

const ReviewsList: FC<IProps> = ({ reviews }) => {
  return (
    <List>
      {reviews.map(
        ({
          reviewer_name: reviewerName,
          reviewer_rating: reviewerRating,
          comment,
        }) => (
          <ListItem>
            <Container>
              <Avatar
                src='https://res.cloudinary.com/dcwbkakpl/image/upload/v1701845113/avatars/default_user_avatar_sr0dpz.jpg'
                alt='user avatar'
              />
              <ReviewerInfo>
                <Name>{reviewerName}</Name>
                <RatingWrap>
                  <FaStar />
                  <Rating>{String(reviewerRating).padEnd(3, '.0')}</Rating>
                </RatingWrap>
              </ReviewerInfo>
            </Container>
            <Comment>{comment}</Comment>
          </ListItem>
        )
      )}
    </List>
  );
};

export default ReviewsList;
