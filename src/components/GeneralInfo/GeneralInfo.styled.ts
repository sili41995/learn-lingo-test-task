import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const InfoWrap = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.sectionColor};
  overflow: hidden;

  & > a {
    display: inline-block;
    min-width: 267px;
    margin-top: ${({ theme }) => theme.spacing(16)};
    padding: ${({ theme }) => theme.spacing(4)};
    border: none;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: ${({ theme }) => theme.fontSize.secondary}px;
    font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};

    line-height: 1.56;
    letter-spacing: 0%;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 98px 108px 98px 64px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const Accent = styled.span`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  font-style: italic;
`;

export const Info = styled.p`
  max-width: 471px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

  line-height: 1.38;
  letter-spacing: -0.02em;
`;

export const ImgWrap = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 568px;
  height: 530px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 30px;
  overflow: hidden;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const GirlImg = styled.img`
  position: absolute;
  top: 80px;
  left: 114px;
  width: 339px;
  height: 339px;
`;

export const MacImg = styled.img`
  position: absolute;
  top: 354px;
  left: 103.64px;
  width: 359.72px;
  height: 304px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: 1.5px dashed ${({ theme }) => theme.colors.primaryColor};
  border-radius: 30px;
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(3)};

  & li:is(:nth-of-type(3), :nth-of-type(4)) > p:last-of-type {
    width: 74px;
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(30.5)}`};
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
`;

export const Quantity = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.14;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const Description = styled.p`
  width: 96px;
  color: rgba(18, 20, 23, 0.7);
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.other}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};

  line-height: 1.29;
  letter-spacing: -0.02em;
`;
