import styled from '@emotion/styled';
import { IStyledProps } from './FiltersMenu.types';

export const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(${({ theme }) => theme.spacing()});
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

export const Item = styled.li``;

export const Label = styled.label`
  &:is(:hover) {
    cursor: pointer;
  }
`;

export const Title = styled.span<IStyledProps>`
  color: ${({ isActive }) =>
    isActive ? 'rgb(18, 20, 23)' : 'rgba(18, 20, 23, 0.2)'};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  letter-spacing: 0%;
`;

export const Input = styled.input`
  position: fixed;
  transform: scale(0);
`;
