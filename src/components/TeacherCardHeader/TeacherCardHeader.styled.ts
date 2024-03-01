import styled from '@emotion/styled';
import { IStyledProps } from './TeacherCardHeader.types';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  & > svg {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      color: #000000;
    }
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    width: 1px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.otherColor};
    margin-left: ${({ theme }) => theme.spacing(4)};
  }

  & > svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colors.iconColor};
  }
`;

export const Option = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primary}px;

  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.5;
  letter-spacing: 0%;
`;

export const OptionAccent = styled.span`
  color: ${({ theme }) => theme.colors.greenColor};
`;

export const FavBtn = styled.button<IStyledProps>`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing(16)};

  & svg {
    display: block;
    color: ${({ isFav, theme }) =>
      isFav ? theme.colors.primaryColor : theme.colors.primaryFontColor};
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
