import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.formTitle}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.2;
  letter-spacing: -0.02;
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.descriptionColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

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
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.33;
  letter-spacing: 0%;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing(10)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

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
