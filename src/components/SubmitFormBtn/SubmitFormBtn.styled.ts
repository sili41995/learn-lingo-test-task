import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: rgb(244, 197, 80);
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  letter-spacing: 0%;
`;
