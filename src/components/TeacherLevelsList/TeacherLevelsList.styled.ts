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
  border: 1px solid ${({ theme }) => theme.colors.otherColor};
  border-radius: 16px;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};

  &:first-of-type {
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Level = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.other}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.14;
  letter-spacing: 0%;
`;
