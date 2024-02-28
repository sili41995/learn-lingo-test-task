import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacing(12)};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: 24px;
  background-color: rgb(255, 255, 255);
`;

export const ImgWrap = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
`;

export const InfoWrap = styled.div``;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const Status = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 12px;
  height: 12px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  background-color: rgb(56, 205, 62);
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.p`
  color: rgb(138, 138, 137);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Name = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0%;
`;
