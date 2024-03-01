import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(8)};
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 16px;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};

  &:first-of-type {
    border-color: transparent;
    background-color: rgb(244, 197, 80);
  }
`;

export const Level = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0%;
`;
