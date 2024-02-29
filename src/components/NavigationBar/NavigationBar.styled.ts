import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(97.5)};
  align-items: center;

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

export const LinksList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(7)};
  align-items: center;
`;

export const ListItem = styled.li`
  & > a {
    color: rgb(18, 20, 23);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;

    &:is(:hover, :focus, .active) {
      color: greenyellow;
    }
  }
`;

export const LogOutBtn = styled.button`
  min-width: 166px;
  padding: 14px;
  border: 0;
  border-radius: 12px;
  background-color: rgb(224, 163, 154);
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0%;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
`;

export const LogInBtn = styled.button`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  background-color: transparent;
  padding: 0;
  border: none;
`;

export const BtnTitle = styled.span`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0%;
`;

export const RegBtn = styled.button`
  min-width: 166px;
  padding: 14px;
  border: 0;
  border-radius: 12px;
  background-color: rgb(18, 20, 23);
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0%;
`;
