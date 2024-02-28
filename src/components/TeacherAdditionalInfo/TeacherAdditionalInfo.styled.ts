import styled from '@emotion/styled';

export const Container = styled.div`
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

export const BookTrialLessonBtn = styled.button`
  min-width: 232px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};
  border: none;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  letter-spacing: 0%;
`;
