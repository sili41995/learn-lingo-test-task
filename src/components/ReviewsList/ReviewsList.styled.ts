import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(8)};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  & > svg {
    color: ${({ theme }) => theme.colors.iconColor};
  }
`;

export const Rating = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.other}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.29;
  letter-spacing: 0%;
`;

export const Comment = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;
