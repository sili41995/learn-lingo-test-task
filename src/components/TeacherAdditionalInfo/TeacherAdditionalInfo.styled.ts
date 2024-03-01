import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const Experience = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;

export const ReadMoreBtn = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

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
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

  line-height: 1.56;
  letter-spacing: 0%;
`;
