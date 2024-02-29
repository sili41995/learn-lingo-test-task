import styled from '@emotion/styled';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  border: none;
  outline: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: 0%;

  &::placeholder {
    color: rgb(18, 20, 23);
  }
`;

export const InputWrap = styled.div`
  position: relative;

  & > input {
    padding-right: ${({ theme }) => theme.spacing(10)};
  }
`;
