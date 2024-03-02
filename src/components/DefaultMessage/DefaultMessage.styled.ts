import styled from '@emotion/styled';

export const Message = styled.p`
  margin-top: ${({ theme }) => theme.spacing(20)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
