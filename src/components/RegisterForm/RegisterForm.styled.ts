import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.formTitle}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.2;
  letter-spacing: -2%;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const InputsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputWrap = styled.div`
  position: relative;

  & > input {
    padding-right: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Input = styled.input`
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

export const ShowPasswordBtn = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 18px;
  background-color: transparent;
  border: none;
  padding: 0;

  & svg {
    display: block;
  }
`;
