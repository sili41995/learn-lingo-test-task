import styled from '@emotion/styled';
import { IStyledProps } from './TeacherCardHeader.types';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  & > svg {
    color: rgb(0, 0, 0);
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.2);
    margin-left: ${({ theme }) => theme.spacing(4)};
  }

  & > svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
    color: rgb(255, 197, 49);
  }
`;

export const Option = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0%;
`;

export const OptionAccent = styled.span`
  color: #38cd3e;
`;

export const FavBtn = styled.button<IStyledProps>`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing(16)};

  & svg {
    display: block;
    color: ${({ isFav }) => (isFav ? 'rgb(244, 197, 80)' : 'rgb(18, 20, 23)')};
  }
`;
