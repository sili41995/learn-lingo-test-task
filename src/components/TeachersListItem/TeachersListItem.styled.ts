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

export const GeneralInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const InfoItem = styled.li``;

export const Info = styled.p`
  font-family: Roboto;
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Languages = styled.span`
  color: #121417;
  text-decoration: underline;
`;

export const Description = styled.span`
  color: #121417;
`;

export const MoreInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const Experience = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const ReadMoreBtn = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
  text-decoration-line: underline;
`;
