import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;

  & .logo {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(30)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(97.5)};
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

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
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: ${({ theme }) => theme.fontSize.primary}px;

    font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

    line-height: 1.25;
    letter-spacing: 0%;

    &:is(:hover, :focus, .active) {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;

export const LogOutBtn = styled.button`
  min-width: 166px;
  padding: 14px;
  border: 0;
  border-radius: 12px;
  background-color: #e0a39a;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

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
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

  line-height: 1.25;
  letter-spacing: 0%;
`;

export const RegBtn = styled.button`
  min-width: 166px;
  padding: 14px;
  border: 0;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primaryFontColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

  line-height: 1.25;
  letter-spacing: 0%;
`;
