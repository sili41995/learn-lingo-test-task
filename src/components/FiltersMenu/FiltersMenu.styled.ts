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
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primaryFontColor : theme.colors.otherColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};

  line-height: 1.11;
  letter-spacing: 0%;
`;

export const Input = styled.input`
  position: fixed;
  transform: scale(0);
`;
