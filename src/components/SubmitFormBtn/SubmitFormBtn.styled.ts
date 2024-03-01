import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

  line-height: 1.56;
  letter-spacing: 0%;
`;
