import styled from '@emotion/styled';

export const Navigation = styled.nav`
  & .logo {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;
  }
`;

export const Title = styled.span`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
`;

export const LinksList = styled.ul``;

export const ListItem = styled.li``;

export const ButtonsList = styled.ul``;

export const LogInBtn = styled.button``;

export const RegBtn = styled.button``;
