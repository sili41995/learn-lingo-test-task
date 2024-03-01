import styled from '@emotion/styled';

export const ListItem = styled.li`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing(12)};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 3px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const InfoWrap = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const Status = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 12px;
  height: 12px;
  border: 2px solid ${({ theme }) => theme.colors.whiteColor};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.greenColor};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1;
  letter-spacing: 0%;
`;
