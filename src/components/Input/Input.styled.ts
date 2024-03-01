import styled from '@emotion/styled';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.outlineColor};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

  line-height: 1.38;
  letter-spacing: 0%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

export const InputWrap = styled.div`
  position: relative;

  & > input {
    padding-right: ${({ theme }) => theme.spacing(10)};
  }
`;
