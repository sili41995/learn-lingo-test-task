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
  background: rgb(244, 197, 80);
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  letter-spacing: 0%;
`;
