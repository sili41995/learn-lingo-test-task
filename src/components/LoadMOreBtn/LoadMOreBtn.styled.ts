import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  min-width: 183px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(16)};
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

  line-height: 1.56;
  letter-spacing: 0%;
`;
