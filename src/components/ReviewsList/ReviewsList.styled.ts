import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled.p`
  color: rgb(138, 138, 137);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  & > svg {
    color: rgb(255, 197, 49);
  }
`;

export const Rating = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: 0%;
`;

export const Comment = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;
