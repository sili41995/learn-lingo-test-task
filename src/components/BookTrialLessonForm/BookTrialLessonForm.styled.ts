import styled from '@emotion/styled';

export const Title = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02;
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: rgba(18, 20, 23, 0.8);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: 0%;
`;

export const TeacherInfo = styled.div`
  display: flex;
  gap: 14px;
  margin-top: ${({ theme }) => theme.spacing(5)};
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const InfoTitle = styled.p`
  color: rgb(138, 138, 137);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0%;
`;

export const Name = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing(10)};
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0%;
`;

export const Form = styled.form`
  margin-top: ${({ theme }) => theme.spacing(5)};

  & > button {
    margin-top: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Reasons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const InputsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;
