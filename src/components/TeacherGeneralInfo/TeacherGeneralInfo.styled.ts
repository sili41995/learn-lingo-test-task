import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const InfoItem = styled.li``;

export const Info = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Languages = styled.span`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  text-decoration: underline;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.primaryFontColor};
`;
